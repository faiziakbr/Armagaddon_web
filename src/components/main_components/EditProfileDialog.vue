<template>
  <v-dialog v-model="dialog" max-width="600px" persistent>
    <v-card>
      <v-form v-model="valid">
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-flex xs12 align-center justify-center layout text-xs-center>
          <v-avatar :size="'100'" color="grey lighten-4">
            <img :src="image" @error="imageLoadError" />
          </v-avatar>
        </v-flex>
        <v-flex xs12 align-center justify-center layout text-xs-center>
          <input
            style="display:none"
            type="file"
            accept="image/png, image/jpeg"
            @change="onFileSelected"
            ref="pickImage"
          />
          <v-btn @click="$refs.pickImage.click()">Pick Image</v-btn>
        </v-flex>
        <v-flex>
          <div class="text-xs-center">
            <span class="subheading">Referral code</span>
            <br />
            <span>{{user.referral_code}}</span>
            <input type="hidden" id="copy_referral" :value="user.referral_code" />
            <v-icon class="accent--text ml-1" @click="copyReferral()">file_copy</v-icon>
          </div>
        </v-flex>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6>
                <v-text-field
                  name="firstName"
                  label="first name*"
                  v-model="firstName"
                  :rules="firstNameRules"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-text-field
                  name="lastName"
                  label="last name*"
                  v-model="lastName"
                  :rules="lastNameRules"
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field name="city" label="City*" v-model="city" :rules="cityRules" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  name="country"
                  label="Country*"
                  v-model="country"
                  :rules="countryRules"
                  required
                ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="closeDialog">Close</v-btn>
          <v-btn color="blue darken-1" flat @click="submit" :disabled="!valid">Update</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
    <app-loader :showDialog="loading"></app-loader>
    <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
    >
      Copied to clipboard
      <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-dialog>
</template>

<script>
import person from "../../assets/person.png";
import axios from "axios";
import { eventBus } from "../../main.js";
import MyLoader from "../custom_components/MyLoader.vue";
import { constants } from "crypto";

export default {
  components: {
    appLoader: MyLoader
  },
  data() {
    return {
      loading: false,
      snackbar: false,
      dialog: false,
      valid: false,
      user: null,
      selectedFile: null,
      base64Image: null,
      image: "",
      firstName: "",
      lastName: "",
      city: "",
      country: "",
      firstNameRules: [v => !!v || "First name is required"],
      lastNameRules: [v => !!v || "Last name is required"],
      cityRules: [v => !!v || "City is required"],
      countryRules: [v => !!v || "Country is required"]
    };
  },
  mounted() {
    eventBus.$on("showDialog", data => {
      this.dialog = data;
    });
    this.user = JSON.parse(localStorage.getItem("user"));
    this.firstName = this.user.first_name;
    this.lastName = this.user.last_name;
    this.city = this.user.city;
    this.country = this.user.country;
    this.image =
      "http://www.forexamg.com/ArmageddonApi/public/appImages/" +
      this.user.profile_pic_url;
  },
  methods: {
    onFileSelected(event) {
      var f = event.target.files[0];
      var reader = new FileReader();

      reader.onload = e => {
        var binaryData = e.target.result;
        //Converting Binary Data to base 64
        this.base64Image = window.btoa(binaryData);
        this.image = "data:image/jpeg;base64," + this.base64Image;
      };
      reader.readAsBinaryString(f);
      /********************************************************/
    },
    submit() {
      this.loading = true;
      let _body = {
        profile_pic: this.base64Image,
        customer_id: this.user.id,
        first_name: this.firstName,
        last_name: this.lastName,
        city: this.city,
        country: this.country
      };

      axios
        .post(
          "http://www.forexamg.com/ArmageddonApi/public/api/updateProfile",
          _body
        )
        .then(resp => {
          this.loading = false;
          localStorage.setItem("user", JSON.stringify(resp.data.customer));
          this.dialog = false;
          eventBus.$emit("profile_updated", true);
        })
        .catch(error => {
          this.loading = false;
          console.log(error);
        });
    },
    copyReferral() {
      let testingCodeToCopy = document.getElementById("copy_referral");
      testingCodeToCopy.setAttribute("type", "text");
      testingCodeToCopy.select();

      try {
        var successful = document.execCommand("copy");
        var msg = successful ? "successful" : "unsuccessful";
      } catch (err) {}
      /* unselect the range */
      testingCodeToCopy.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
      this.snackbar = true;
    },
    closeDialog() {
      this.user = JSON.parse(localStorage.getItem("user"));
      this.firstName = this.user.first_name;
      this.lastName = this.user.last_name;
      this.city = this.user.city;
      this.country = this.user.country;
      this.image =
        "http://www.forexamg.com/ArmageddonApi/public/appImages/" +
        this.user.profile_pic_url;
      this.dialog = false;
    },
    imageLoadError(event) {
      this.image = person;
      event.target.src = this.image;
    }
  }
};
</script>
<template>
  <v-dialog v-model="openDialog" persistent max-width="600px">
    <v-card>
      <v-form v-model="valid">
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-flex xs12 align-center justify-center layout text-xs-center>
          <v-avatar :size="'100'" color="grey lighten-4">
            <img :src="image" @error="imageLoadError">
          </v-avatar>
        </v-flex>
        <v-flex xs12 align-center justify-center layout text-xs-center>
          <input
            style="display:none"
            type="file"
            accept="image/png, image/jpeg"
            @change="onFileSelected"
            ref="pickImage"
          >
          <v-btn @click="$refs.pickImage.click()">Pick Image</v-btn>
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
  </v-dialog>
</template>

<script>
import person from "../../assets/person.png";
import axios from "axios";

export default {
  props: ["openDialog"],
  data() {
    return {
      dialog: this.openDialog,
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
    this.user = JSON.parse(localStorage.getItem("user"));
    this.firstName = this.user.first_name;
    this.lastName = this.user.last_name;
    this.city = this.user.city;
    this.country = this.user.country;
    this.image =
      "http://www.vacayplanet.com/ArmageddonApi/public/api/" +
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
      };
      reader.readAsBinaryString(f);
      //******************************************************* */
    },
    submit() {
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
          "http://www.vacayplanet.com/ArmageddonApi/public/api/updateProfile",
          _body,
          {
            onUploadProgress: uploadEvent => {
              console.log(uploadEvent.loaded);
              console.log("total: " + uploadEvent.total);
              console.log(
                "Upload event: " +
                  Math.round((uploadEvent.loaded / uploadEvent.total) * 100)
              );
            }
          }
        )
        .then(resp => {
          console.log(resp.data);
          localStorage.setItem("user", JSON.stringify(resp.data.customer));
        })
        .catch(error => {
          console.log(error);
        });
    },
    // onImageChange1(e) {
    //   let files = e.target.files || e.dataTransfer.files;
    //   if (!files.length) return;
    //   this.createImage1(files[0]);
    // },
    // createImage1(file1) {
    //   let reader = new FileReader();
    //   let vm = this;
    //   reader.onload = e => {
    //      vm.adPic1 = e.target.result;

    //   };
    //   reader.readAsDataURL(file1);
    // },

    closeDialog() {
      this.openDialog = false;
    },
    imageLoadError(event) {
      this.image = person;
      event.target.src = this.image;
    }
  },
  watch: {
    dialog(val) {
      if (!val) return;
    }
    // openDialog(val) {
    //   console.log(val);
    //   this.dialog = val;
    // }
  }
};
</script>
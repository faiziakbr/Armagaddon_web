<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <!-- <form action="https://sandbox.payfast.co.za/eng/process" method="POST">
        <input type="hidden" name="merchant_id" value="10000100">
        <input type="hidden" name="merchant_key" value="46f0cd694581a">
        <input type="hidden" name="return_url" value="https://www.yoursite.com/return">
        <input type="hidden" name="cancel_url" value="https://www.yoursite.com/cancel">
        <input type="hidden" name="notify_url" value="https://www.yoursite.com/notify">
        <input name="amount" value="500">
        <input name="item_name" value="myItem">
        <button type="submit" value="submit">submit</button>
      </form>-->
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <!-- <v-toolbar dark color="primary">
            <v-toolbar-title>Register</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>-->
          <div style="background-color:#000">
            <v-layout justify-center>
              <v-img :src="require('../../assets/lion.png')"  height="125" contain></v-img>
            </v-layout>
          </div>
          <v-layout justify-center class="mt-2">
            <h3 class="accent--text headline">Register</h3>
          </v-layout>
          <p
            :hidden="errorText.length <= 0"
            class="ma-2"
            style="border: 2px red solid; padding:2px; background-color:rgba(255, 0, 0, 0.2);"
          >{{errorText}}</p>

          <v-form v-model="valid">
            <v-card-text>
              <v-layout row wrap>
                <v-flex xs12 sm6>
                  <v-text-field
                    prepend-icon="person"
                    name="first_name"
                    label="First Name"
                    v-model="firstName"
                    required
                    :rules="firstNameRules"
                    @click.native="removeErrorText"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    prepend-icon="person"
                    name="last_name"
                    label="Last Name"
                    v-model="lastName"
                    required
                    :rules="lastNameRules"
                    @click.native="removeErrorText"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    prepend-icon="email"
                    name="email"
                    label="email"
                    type="email"
                    v-model="email"
                    required
                    :rules="emailRules"
                    @click.native="removeErrorText"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    prepend-icon="code"
                    name="referral_code"
                    label="Referral Code (optional)"
                    v-model="referralCode"
                    @blur="validateReferralCode"
                    :append-icon="icon"
                    :loading="checkReferral"
                  >
                    <template v-slot:progress>
                      <v-progress-linear :indeterminate="true" height="5"></v-progress-linear>
                    </template>
                  </v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    type="password"
                    v-model="password"
                    required
                    :rules="passwordRules"
                    @click.native="removeErrorText"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    prepend-icon="lock"
                    name="confirm_password"
                    label="Confirm Password"
                    type="password"
                    v-model="confirmPassword"
                    required
                    :rules="confirmPasswordRules"
                    @click.native="removeErrorText"
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="accent" @click="register" :disabled="(!valid)">Register</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      valid: false,
      errorText: "",
      checkReferral: false,
      referralValid: false,
      icon: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      referralCode: "",
      referralId: -1,
      firstNameRules: [v => !!v || "First name is required"],
      lastNameRules: [v => !!v || "Last name is required"],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Password must not be less than 6 characters"
      ],
      confirmPasswordRules: [
        v => !!v || "Confirm password is required",
        v => v.length >= 6 || "Password must not be less than 6 characters"
      ]
    };
  },
  methods: {
    validateReferralCode() {
      if (this.referralCode != "") {
        this.checkReferral = true;
        axios
          .get(
            "http://www.forexamg.com/ArmageddonApi/public/api/verifyReferral/" +
              this.referralCode
          )
          .then(response => {
            if (response.status == 200) {
              this.referralId = response.data.referral.id;
              this.referralValid = true;
              this.checkReferral = false;
              this.icon = "check_circle";
            } else {
              this.referralValid = false;
              this.checkReferral = false;
              this.icon = "cancel";
            }
          })
          .catch(error => {
            console.log(error);
            this.referralValid = false;
            this.checkReferral = false;
            this.icon = "cancel";
          });
      }
    },
    register() {
      // let email = this.email;
      // let password = this.password;

      if (this.password != this.confirmPassword) {
        this.errorText = "Password's do not match!";
        return;
      }

      let _body = {};
      if (this.referralCode == "") {
        _body = {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword
        };
      } else if (this.referralValid) {
        console.log("Running this code");
        _body = {
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email,
          password: this.password,
          password_confirmation: this.confirmPassword,
          referral_id: this.referralId
        };
      } else {
        if (this.referralCode.length > 0 && !this.referralValid)
          this.errorText = "Referral Code invalid!";
        return;
      }

      this.$store
        .dispatch("register", _body)
        .then(response => {
          this.$router.push("/checkout");
        })
        .catch(err => {
          console.log("ERROR: " + err);
          this.errorText = "Email already exists!";
        });
    },
    removeErrorText() {
      this.errorText = "";
    }
  }
};
</script>

<style>
.v-input__icon--append .v-icon {
  color: #ff5252;
}
</style>




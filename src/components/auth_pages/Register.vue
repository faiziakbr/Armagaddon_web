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
          <v-toolbar dark color="primary">
            <v-toolbar-title>Register</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>

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
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field
                    prepend-icon="code"
                    name="referral_code"
                    label="Referral Code"
                    v-model="referralCode"
                    required
                    @blur="validateReferralCode"
                    :append-icon="icon"
                    :rules="referralCodeRules"
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
                  ></v-text-field>
                </v-flex>
              </v-layout>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="primary"
                @click="register"
                :disabled="(!valid || !referralValid)"
              >Register</v-btn>
              <!-- <v-btn color="accent" @click="payfast">Payfast</v-btn> -->
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
      checkReferral: false,
      referralValid: false,
      icon: "",
      firstName: "MyTest1",
      lastName: "working",
      email: "MyTest1@test.com",
      password: "123456",
      confirmPassword: "123456",
      referralCode: "2d4cf02c10",
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
      ],
      referralCodeRules: [v => !!v || "Referral code is required"]
    };
  },
  methods: {
    validateReferralCode() {
      if (this.referralCode != "") {
        this.checkReferral = true;
        axios
          .get(
            "http://www.vacayplanet.com/ArmageddonApi/public/api/verifyReferral/" +
              this.referralCode
          )
          .then(response => {
            if (response.status == 200) {
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
      let _body = {
        first_name: this.firstName,
        last_name: this.lastName,
        email: this.email,
        password: this.password,
        password_confirmation: this.confirmPassword,
        referral_id: this.referralCode
      };
      this.$store
        .dispatch("register", _body)
        .then(response => {
          console.log(response);
          this.$router.push("/login");
        })
        .catch(err => console.log(err));
    },
    payfast() {
      window.open(
        "https://sandbox.payfast.co.za/eng/process?merchant_id=10000100&merchant_key=46f0cd694581a&amount=10&item_name=item&return_url=https://www.google.com"
      );
      // axios
      //   .post(
      //     "https://sandbox.payfast.co.za/eng/process?merchant_id=10000100&merchant_key=46f0cd694581a&amount=10&item_name=item&return_url=https://www.google.com"
      //   )
      //   .then(response => {
      //     console.log(response);
      //   })
      //   .catch(error => {
      //     console.log(error);
      //   });
    }
  }
};
</script>

<style>
.v-input__icon--append .v-icon {
  color: #ff5252;
}
</style>




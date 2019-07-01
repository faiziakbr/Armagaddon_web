<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm4 md4>
        <v-card class="elevation-12">
          <div style="background-color:#000">
            <v-layout justify-center>
               <v-layout justify-center>
              <v-img :src="require('../../assets/lion.png')"  height="125" contain></v-img>
            </v-layout>
            </v-layout>
          </div>
          <v-layout justify-center class="mt-2">
            <h3 class="accent--text headline">Sign in</h3>
          </v-layout>

          <p
            :hidden="errorText.length <= 0"
            class="ma-2"
            style="border: 2px red solid; padding:2px; background-color:rgba(255, 0, 0, 0.2);"
          >{{errorText}}</p>

          <v-form v-model="valid">
            <v-card-text>
              <v-text-field
                color="accent"
                prepend-icon="email"
                name="email"
                label="email"
                type="email"
                v-model="email"
                required
                :rules="emailRules"
                @click.native="removeErrorText"
              ></v-text-field>
              <v-text-field
                color="accent"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                v-model="password"
                required
                :rules="passwordRules"
                @click.native="removeErrorText"
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="accent" @click="login" :disabled="!valid">Login</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-form>
          <v-layout justify-center>
            <p class="ma-2">
              Don't have an account
              <span class="accent--text" style="cursor:pointer" @click="goToRegister">Sign up</span>
            </p>
          </v-layout>
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
      email: "",
      password: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Password is required",
        v => v.length >= 6 || "Password must not be less than 6 characters"
      ]
    };
  },
  methods: {
    login() {
      let email = this.email;
      let password = this.password;
      this.$store
        .dispatch("login", { email, password })
        .then(response => {
          this.$router.push("/checkout");
        })
        .catch(err => {
          console.log(err);
          this.errorText = "Invalid Email or Password!!";
        });
    },
    goToRegister(){
        this.$router.push('/register');
    },
    removeErrorText() {
      this.errorText = "";
    }
  }
};
</script>


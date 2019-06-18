<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm4 md4>
        <v-card class="elevation-12">
          <div style="background-color:#000">
            <v-layout justify-center>
              <v-avatar :size="150">
                <img :src="require('../../assets/lion.png')">
              </v-avatar>
            </v-layout>
          </div>
          <v-layout justify-center class="mt-2">
            <h3 class="accent--text headline">Sign in</h3>
          </v-layout>
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
              ></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="accent" @click="login" :disabled="!valid">Login</v-btn>
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
          this.$router.push("/");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>


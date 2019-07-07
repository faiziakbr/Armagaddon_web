<template>
  <v-dialog v-model="showDialog" hide-overlay persistent width="600">
    <v-card class="pa-2">
      <v-layout justify-end>
        <button flat @click="onClickBack(false)">
          <v-icon>clear</v-icon>
        </button>
      </v-layout>
      <v-layout justify-center>
        <h3 class="headline" style="font-weight:bold">Update bank details</h3>
      </v-layout>
      <v-form v-model="validPaypal">
        <v-text-field v-model="paypalEmail" :rules="emailRules" label="Paypal Email" required></v-text-field>
        <v-btn @click="updatePaypal" :disabled="!validPaypal">submit</v-btn>
      </v-form>
    </v-card>
    <my-loader :showDialog="loading"></my-loader>
  </v-dialog>
</template>

<script>
import MyLoader from "../custom_components/MyLoader.vue";
import axios from "axios";

export default {
  props: ["showDialog"],
  data() {
    return {
      validPaypal: false,
      dialog: this.showDialog,
      loading: false,
      paypalEmail: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  components: {
    MyLoader
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.paypalEmail = this.user.paypal_email;
  },
  methods: {
    onClickBack(value) {
      //Pass data back to parent
      var obj = {
        makeChange: value,
        email: this.paypalEmail
      };
      this.$emit("clicked", obj);

      this.showDialog = false;
    },
    updatePaypal() {
      this.loading = true;
      let _body = {
        customer_id: this.user.id,
        paypal_email: this.paypalEmail
      };
      axios({
        url: "http://www.forexamg.com/ArmageddonApi/public/api/updatePaypal",
        data: _body,
        method: "POST"
      })
        .then(response => {
          this.user.paypal_email = this.paypalEmail;
          localStorage.setItem("user", JSON.stringify(this.user));
          this.loading = false;
          this.onClickBack(true);
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    }
  }
};
</script>


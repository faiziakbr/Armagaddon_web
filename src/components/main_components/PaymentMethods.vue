<template>
  <v-container>
    <v-layout justify-center>
      <h3 class="headline" style="font-weight:bold">Withdraw Methods</h3>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6>
        <v-card class="my-5 mx-2 px-2 py-1">
          <h4 class="headline" style="text-align:center">Bank</h4>
          <v-form v-model="validBank">
            <v-text-field v-model="name" :rules="nameRules" label="Bank Name" required></v-text-field>
            <v-text-field v-model="account" :rules="accountRules" label="Account number" required></v-text-field>
            <v-text-field v-model="swiftCode" :rules="codeRules" label="Swift Code" required></v-text-field>
            <v-btn @click="updateBank" :disabled="!validBank">submit</v-btn>
          </v-form>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <v-card class="my-5 mx-2 px-2 py-1">
          <h4 class="headline" style="text-align:center;">Paypal</h4>
          <v-form v-model="validPaypal">
            <v-text-field v-model="paypalEmail" :rules="emailRules" label="Paypal Email" required></v-text-field>
            <v-btn @click="updatePaypal" :disabled="!validPaypal">submit</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- <v-layout row wrap>
      <v-flex xs6 md6 style="height:200px;">
        <v-hover class="mx-2">
          <v-card slot-scope="{hover}" :class="`${hover ? 'class1' : 'class2'}`" @click="openBank">
            <v-img
              :src="require('../../assets/bank_building.png')"
              contain
              style="height:200px; border: 1px solid #ddd;"
            ></v-img>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex xs6 md6 style="height:200px;">
        <v-hover class="mx-2">
          <v-card
            slot-scope="{hover}"
            :class="`${hover ? 'class1' : 'class2'}`"
            @click="openPaypal"
          >
            <v-img
              :src="require('../../assets/paypal_logo.png')"
              contain
              style="border: 1px solid #000;"
            ></v-img>
          </v-card>
        </v-hover>
      </v-flex>
      <v-flex v-if="toggle" xs12>
        <v-card class="my-5 px-2 py-1">
          <v-form v-model="validBank">
            <v-text-field v-model="name" :rules="nameRules" label="Bank Name" required></v-text-field>
            <v-text-field v-model="account" :rules="accountRules" label="Account number" required></v-text-field>
            <v-text-field v-model="swiftCode" :rules="codeRules" label="Swift Code" required></v-text-field>
            <v-btn @click="updateBank" :disabled="!validBank">submit</v-btn>
          </v-form>
        </v-card>
      </v-flex>
      <v-flex v-else xs12>
        <v-card class="my-5 px-2 py-1">
          <v-form v-model="validPaypal">
            <v-text-field v-model="paypalEmail" :rules="emailRules" label="Paypal Email" required></v-text-field>
            <v-btn @click="updatePaypal" :disabled="!validPaypal">submit</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>-->
    <my-loader :showDialog="loading"></my-loader>
  </v-container>
</template>

<script>
import axios from "axios";
import MyLoader from "../custom_components/MyLoader.vue";

export default {
  components: {
    MyLoader
  },
  data() {
    return {
      validBank: false,
      validPaypal: false,
      loading: false,
      toggle: false,
      user: null,
      name: "",
      account: "",
      swiftCode: "",
      paypalEmail: "",
      nameRules: [v => !!v || "Bank name is required"],
      accountRules: [v => !!v || "Account number is required"],
      codeRules: [v => !!v || "Swift code is required"],
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    updateBank() {
      this.loading = true;
      let _body = {
        customer_id: this.user.id,
        bank_name: this.name,
        account_number: this.account,
        swift_code: this.swiftCode
      };
      axios({
        url: "http://www.vacayplanet.com/ArmageddonApi/public/api/updateBank",
        data: _body,
        method: "POST"
      })
        .then(response => {
          this.user.bank_detail = response.data.bank;
          localStorage.setItem("user", JSON.stringify(this.user));
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    },
    updatePaypal() {
      this.loading = true;
      let _body = {
        customer_id: this.user.id,
        paypal_email: this.paypalEmail
      };
      axios({
        url: "http://www.vacayplanet.com/ArmageddonApi/public/api/updatePaypal",
        data: _body,
        method: "POST"
      })
        .then(response => {
          this.user.paypal_email = this.paypalEmail;
          localStorage.setItem("user", JSON.stringify(this.user));
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    },
    openBank() {
      this.toggle = true;
    },
    openPaypal() {
      this.toggle = false;
    }
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.name = this.user.bank_detail.bank_name;
    this.account = this.user.bank_detail.account_number;
    this.swiftCode = this.user.bank_detail.swift_code;
    this.paypalEmail = this.user.paypal_email;
  }
};
</script>

<style>
.class1 {
  cursor: pointer;
}
.class2 {
  cursor: pointer;
  border: 5px solid;
}
</style>






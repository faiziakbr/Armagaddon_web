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
      <v-form v-model="validBank">
        <v-text-field v-model="name" :rules="nameRules" label="Bank Name" required></v-text-field>
        <v-text-field v-model="account" :rules="accountRules" label="Account number" required></v-text-field>
        <v-text-field v-model="swiftCode" :rules="codeRules" label="Swift Code" required></v-text-field>
        <v-btn @click="updateBank" :disabled="!validBank">submit</v-btn>
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
      validBank: false,
      dialog: this.showDialog,
      loading: false,
      name: "",
      account: "",
      swiftCode: "",
      nameRules: [v => !!v || "Bank name is required"],
      accountRules: [v => !!v || "Account number is required"],
      codeRules: [v => !!v || "Swift code is required"]
    };
  },
  components: {
    MyLoader
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.name = this.user.bank_detail.bank_name;
    this.account = this.user.bank_detail.account_number;
    this.swiftCode = this.user.bank_detail.swift_code;
  },
  methods: {
    onClickBack(value) {
      //Pass data back to parent
      var obj = {
        makeChange: value,
        name: this.name,
        account: this.account,
        code: this.swiftCode
      };
      this.$emit("clicked", obj);

      this.showDialog = false;
    },
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




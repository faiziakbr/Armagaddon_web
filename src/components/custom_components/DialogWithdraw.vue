<template>
  <v-dialog v-model="showDialog" hide-overlay persistent width="600">
    <v-card class="pa-2">
      <v-layout justify-end>
        <button flat @click="onClickBack(false)">
          <v-icon>clear</v-icon>
        </button>
      </v-layout>
      <v-layout justify-center>
        <h3 class="headline" style="font-weight:bold">Withdraw amount</h3>
      </v-layout>
      <p
        :hidden="errorText.length <= 0"
        class="ma-2"
        style="border: 1px red solid; padding:2px; background-color:rgba(255, 0, 0, 0.2);"
      >{{errorText}}</p>
      <v-form v-model="validAmount">
        <v-text-field v-model="amount" type="number" label="Amount" :rules="amountRules" required></v-text-field>
        <!-- <v-radio-group v-model="radios" :mandatory="true" row @click="clicked">
          <v-radio color="accent" label="Bank" :value="0"></v-radio>
          <v-radio color="accent" label="Paypal" :value="1"></v-radio>
        </v-radio-group>-->
        <v-switch
          v-model="amountSwitch"
          :label="amountSwitch ? 'Paypal' : 'Bank'"
          color="accent"
          @change="selectedMethods"
        ></v-switch>
        <p class="body-2">{{type}}</p>
        <v-btn :disabled="!validAmount" @click="withdrawAmount">Submit</v-btn>
      </v-form>
    </v-card>
    <my-loader :showDialog="loading"></my-loader>
  </v-dialog>
</template>

<script>
import MyLoader from "../custom_components/MyLoader.vue";
import axios from "axios";
import { eventBus } from "../../main.js";

export default {
  props: ["showDialog"],
  components: {
    MyLoader
  },
  data() {
    return {
      validAmount: false,
      dialog: this.showDialog,
      balance: 0,
      loading: false,
      type: "",
      source: "bank",
      user: null,
      errorText: "",
      amount: "",
      amountRules: [
        v => !!v || "Amount is required",
        v => v >= 1 || "Amount can't be negative or zero"
      ],
      amountSwitch: false
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.selectedMethods();

    eventBus.$on("balance", data => {
      this.balance = data;
      console.log("balance: " + this.balance);
    });
  },
  methods: {
    onClickBack(value) {
      //Pass data back to parent
      //   var obj = {
      //     makeChange: value,
      //     email: this.paypalEmail
      //   };
      this.$emit("clicked", value);

      this.showDialog = false;
    },
    selectedMethods() {
      if (this.amountSwitch) {
        if (this.user.bank_detail != null) {
          this.source = "bank";
          this.type = this.user.bank_detail.account_number;
        } else this.type = "No Bank found!";
      } else {
        if (this.user.paypal_email != null) {
          this.source = "paypal";
          this.type = this.user.paypal_email;
        } else this.type = "No Paypal email!";
      }
    },
    withdrawAmount() {
      if (this.type == "No Bank found!" || this.type == "No Paypal email!") {
        this.errorText = "No withdraw method found!";
        return;
      }
      if (this.balance <= 0 || this.amount > this.balance) {
        this.errorText = "Insufficient balance!";
        return;
      }

      this.loading = true;
      let _body = {
        customer_id: this.user.id,
        amount: this.amount,
        payment_method: this.source
      };
      axios({
        url: "http://www.vacayplanet.com/ArmageddonApi/public/api/withdraw",
        data: _body,
        method: "POST"
      })
        .then(response => {
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

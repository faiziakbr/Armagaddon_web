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
        <v-layout row>
          <v-flex>
            <label class="container">
              Bank
              <input
                v-model="radios"
                value="bank"
                type="radio"
                checked="checked"
                name="radio"
                @change="selectedMethods"
              />
              <span class="checkmark"></span>
            </label>
          </v-flex>
          <v-flex>
            <label class="container">
              Paypal
              <input
                v-model="radios"
                value="paypal"
                type="radio"
                name="radio"
                @change="selectedMethods"
              />
              <span class="checkmark"></span>
            </label>
          </v-flex>
        </v-layout>
        <!-- <v-switch
          v-model="amountSwitch"
          :label="amountSwitch ? 'Paypal' : 'Bank'"
          color="accent"
          @change="selectedMethods"
        ></v-switch>-->
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
      checkbox: true,
      validAmount: false,
      dialog: this.showDialog,
      balance: 0,
      loading: false,
      type: "",
      source: "bank",
      radios: "bank",
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
      if (this.radios == "bank") {
        if (this.user.bank_detail != null) {
          this.source = "bank";
          this.type = "Account number: " + this.user.bank_detail.account_number;
        } else this.type = "No Bank found!";
      } else if (this.radios == "paypal") {
        if (this.user.paypal_email != null) {
          this.source = "paypal";
          this.type = "Paypal Email: " + this.user.paypal_email;
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
        url: "http://www.forexamg.com/ArmageddonApi/public/api/withdraw",
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

<style scoped>
/* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 20px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default radio button */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #f3bf2e;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container .checkmark:after {
  top: 9px;
  left: 9px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: white;
}
</style>


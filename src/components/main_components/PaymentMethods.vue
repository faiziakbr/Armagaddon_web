<template>
  <v-container>
    <v-layout justify-center>
      <h3 class="headline" style="font-weight:bold">Withdraw Methods</h3>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm12 md6>
        <v-card class="my-5 mx-2 px-2 py-1">
          <h4 class="headline" style="text-align:center">Bank</h4>
          <v-card-text>
            <div>
              <h3 class="title">Bank Name:</h3>
              <h4 class="body-1 my-2">{{name}}</h4>
            </div>
          </v-card-text>
          <v-divider class="primary"></v-divider>
          <v-card-text>
            <div>
              <h3 class="title">Account Number:</h3>
              <h4 class="body-1 my-2">{{account}}</h4>
            </div>
          </v-card-text>
          <v-divider class="primary"></v-divider>
          <v-card-text>
            <div>
              <h3 class="title">Swift Code:</h3>
              <h4 class="body-1 my-2">{{swiftCode}}</h4>
            </div>
          </v-card-text>

          <v-btn @click="updateBank">Update</v-btn>
          <!-- <v-form v-model="validBank">
            <v-text-field v-model="name" :rules="nameRules" label="Bank Name" required></v-text-field>
            <v-text-field v-model="account" :rules="accountRules" label="Account number" required></v-text-field>
            <v-text-field v-model="swiftCode" :rules="codeRules" label="Swift Code" required></v-text-field>
            <v-btn @click="updateBank" :disabled="!validBank">submit</v-btn>
          </v-form>-->
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md6>
        <v-card class="my-5 mx-2 px-2 py-1">
          <h4 class="headline" style="text-align:center;">Paypal</h4>
          <v-card-text>
            <div>
              <h3 class="title">Paypal Email:</h3>
              <h4 class="body-1 my-2">{{paypalEmail}}</h4>
            </div>
          </v-card-text>
          <v-btn @click="updatePaypal">Update</v-btn>
          <!-- <v-form v-model="validPaypal">
            <v-text-field v-model="paypalEmail" :rules="emailRules" label="Paypal Email" required></v-text-field>
            <v-btn @click="updatePaypal" :disabled="!validPaypal">submit</v-btn>
          </v-form>-->
        </v-card>
      </v-flex>
    </v-layout>
    <edit-bank-dialog @clicked="callBackBankDialog" :showDialog="bankDialog"></edit-bank-dialog>
    <edit-paypal-dialog @clicked="callBackPaypalDialog" :showDialog="paypalDialog"></edit-paypal-dialog>
  </v-container>
</template>

<script>
import EditBankDialog from "../custom_components/EditBankDialog.vue";
import EditPaypalDialog from "../custom_components/EditPaypalDialog.vue";

export default {
  components: {
    EditBankDialog,
    EditPaypalDialog
  },
  data() {
    return {
      validBank: false,
      validPaypal: false,
      bankDialog: false,
      paypalDialog: false,
      toggle: false,
      user: null,
      name: "",
      account: "",
      swiftCode: "",
      paypalEmail: ""
    };
  },
  methods: {
    callBackBankDialog(value) {
      if (value.makeChange) {
        this.name = value.name;
        this.account = value.account;
        this.swiftCode = value.code;
      }
      this.bankDialog = false;
    },
    callBackPaypalDialog(value) {
      if (value.makeChange) this.paypalEmail = value.email;
      this.paypalDialog = false;
    },
    updateBank() {
      this.bankDialog = true;
    },
    updatePaypal() {
      this.paypalDialog = true;
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






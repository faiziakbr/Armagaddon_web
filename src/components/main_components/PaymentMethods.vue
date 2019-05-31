<template>
  <v-container>
    <v-layout row wrap>
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
          <form>
            <v-text-field v-model="name" :rules="nameRules" label="Bank Name" required></v-text-field>
            <v-text-field v-model="account" :rules="accountRules" label="Account number" required></v-text-field>
            <v-text-field v-model="postalCode" :rules="codeRules" label="Postal Code" required></v-text-field>
            <v-btn >submit</v-btn>
          </form>
        </v-card>
      </v-flex>
      <v-flex v-else xs12>
        <v-card class="my-5 px-2 py-1">
          <form>
            <v-text-field v-model="paypalEmail" :rules="emailRules" label="Paypal Email" required></v-text-field>
            <v-btn >submit</v-btn>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
      name: "",
      account: "",
      postalCode: "",
      paypalEmail: "",
      emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ]
    };
  },
  methods: {
    openBank() {
      this.toggle = true;
    },
    openPaypal() {
      this.toggle = false;
    }
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






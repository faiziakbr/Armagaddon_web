<template >
  <div>
    <v-layout row align-content-space-between wrap>
      <v-flex xs12 sm4></v-flex>
      <v-flex xs12 sm4>
        <h3 class="headline text-xs-center" style="font-weight:bold;">Earnings</h3>
      </v-flex>
      <v-flex xs12 sm4>
        <v-layout align-center v-if="$vuetify.breakpoint.xs" justify-center>
          <button
            style="text-align:center"
            class="title accent--text"
            @click="withdrawDialog = true"
          >Withdraw</button>
        </v-layout>
        <v-layout align-center v-if="$vuetify.breakpoint.smAndUp" justify-end>
          <button
            style="text-align:center"
            class="title accent--text"
            @click="withdrawDialog = true"
          >Withdraw</button>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout column>
      <v-layout row wrap>
        <v-flex xs12 sm4>
          <v-card class="mx-2 my-2">
            <div class="pa-2">
              <p class="grey--text subheading">Personal Balance</p>
              <h3
                class="display-2"
                style="text-align:center"
              >${{earnings.total_earned - earnings.withdrawn}}</h3>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card class="mx-2 my-2">
            <div class="pa-2">
              <p class="grey--text subheading">Total Earned</p>
              <h3 class="display-2" style="text-align:center">${{earnings.total_earned}}</h3>
            </div>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card class="mx-2 my-2">
            <div class="pa-2">
              <p class="grey--text subheading">Withdrawn</p>
              <h3 class="display-2" style="text-align:center">${{earnings.withdrawn}}</h3>
            </div>
          </v-card>
        </v-flex>
      </v-layout>
      <h6 class="title ma-2">Transactions</h6>
      <v-layout column>
        <v-flex v-for="item in transactions" :key="item.id" class="py-2 px-2">
          <item-transaction :itemTransaction="item"></item-transaction>
        </v-flex>
      </v-layout>
      <app-loader :showDialog="loading"></app-loader>
      <withdraw-dialog @clicked="refreshEarnings" :showDialog="withdrawDialog"></withdraw-dialog>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import ItemTransaction from "../custom_components/ItemTransaction.vue";
import MyLoader from "../custom_components/MyLoader.vue";
import WithdrawDialog from "../custom_components/DialogWithdraw.vue";
import { eventBus } from "../../main.js";

export default {
  components: {
    ItemTransaction,
    appLoader: MyLoader,
    WithdrawDialog
  },
  data() {
    return {
      loading: true,
      withdrawDialog: false,
      earnings: {},
      transactions: []
    };
  },
  mounted() {
    this.loadEarnings();
  },
  methods: {
    refreshEarnings(value) {
      this.loadEarnings();
      this.withdrawDialog = false;
    },
    loadEarnings() {
      let user = JSON.parse(localStorage.getItem("user"));
      axios({
        method: "GET",
        url:
          "http://www.vacayplanet.com/ArmageddonApi/public/api/earnings/" +
          user.id
      })
        .then(response => {
          if (response.data.earnings != null)
            this.earnings = response.data.earnings;
          this.transactions = response.data.transactions;
          this.loading = false;
          let balance = this.earnings.total_earned - this.earnings.withdrawn;
          eventBus.$emit("balance", balance);
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    }
  }
};
</script>


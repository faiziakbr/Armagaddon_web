<template >
  <div>
    <v-layout justify-center>
      <h3 class="headline" style="font-weight:bold">Earnings</h3>
    </v-layout>
    <v-layout column>
      <v-layout row wrap>
        <v-flex xs12 sm4>
          <v-card class="mx-2 my-2">
            <div class="pa-2">
              <p class="grey--text subheading">Personal Balance</p>
              <h3 class="display-2" style="text-align:center">${{earnings.total_earned - earnings.withdrawn}}</h3>
            </div>
            <!-- <v-card-title style="text-align:center">
              <div>
                <p class="grey--text">Personal Balance</p>
                <h1 class="display-3">${{earnings.total_earned - earnings.withdrawn}}</h1>
              </div>
            </v-card-title>-->
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card class="mx-2 my-2">
            <div class="pa-2">
              <p class="grey--text subheading">Total Earned</p>
              <h3 class="display-2" style="text-align:center">${{earnings.total_earned}}</h3>
            </div>
            <!-- <v-card-title>
              <div>
                <h3 class="headline">Total Earned</h3>
                <h3 class="headline">${{earnings.total_earned}}</h3>
              </div>
            </v-card-title> -->
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card class="mx-2 my-2">
            <div class="pa-2">
              <p class="grey--text subheading">Withdrawn</p>
              <h3 class="display-2" style="text-align:center">${{earnings.withdrawn}}</h3>
            </div>
            <!-- <v-card-title>
              <div>
                <h3 class="headline">Withdrawn</h3>
                <h3 class="headline">${{earnings.withdrawn}}</h3>
              </div>
            </v-card-title> -->
          </v-card>
        </v-flex>
      </v-layout>
      <h6 class="title ma-2">Transactions</h6>
      <v-layout column>
        <v-flex v-for="item in transactions" :key="item.id" xs12 class="py-2 px-2">
          <item-transaction :itemTransaction="item"></item-transaction>
        </v-flex>
      </v-layout>
      <app-loader :showDialog="loading"></app-loader>
    </v-layout>
  </div>
</template>

<script>
import axios from "axios";
import ItemTransaction from "../custom_components/ItemTransaction.vue";
import MyLoader from "../custom_components/MyLoader.vue";

export default {
  components: {
    ItemTransaction,
    appLoader: MyLoader
  },
  data() {
    return {
      loading: true,
      earnings: {},
      transactions: []
    };
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    axios({
      method: "GET",
      url:
        "http://www.vacayplanet.com/ArmageddonApi/public/api/earnings/" +
        user.id
    })
      .then(response => {
        this.earnings = response.data.earnings;
        this.transactions = response.data.transactions;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
        this.loading = false;
      });
  }
};
</script>


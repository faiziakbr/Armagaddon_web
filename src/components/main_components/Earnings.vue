<template>
  <v-layout column>
    <v-layout row>
      <v-flex>
        <v-card class="mx-2 my-2">
          <v-card-title>
            <div>
              <h3 class="headline">Personal Balance</h3>
              <h3 class="headline">${{earnings.total_earned - earnings.withdrawn}}</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card class="mx-2 my-2">
          <v-card-title>
            <div>
              <h3 class="headline">Total Earned</h3>
              <h3 class="headline">${{earnings.total_earned}}</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card class="mx-2 my-2">
          <v-card-title>
            <div>
              <h3 class="headline">Withdrawn</h3>
              <h3 class="headline">${{earnings.withdrawn}}</h3>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
    <v-card-title>Transactions</v-card-title>
    <v-layout column>
      <v-flex v-for="item in transactions" :key="item.id" xs12 class="py-2 px-2">
        <item-transaction :itemTransaction="item"></item-transaction>
      </v-flex>
    </v-layout>
    <app-loader :showDialog="loading"></app-loader>
  </v-layout>
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


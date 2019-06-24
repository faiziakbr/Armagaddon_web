<template>
  <div>
    <v-layout justify-center>
      <h3 class="headline" style="font-weight:bold">Dashboard</h3>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 sm4>
        <v-card class="mx-2 my-2">
          <div class="pa-2">
            <p class="grey--text title" style="text-align:center">Personal Balance</p>
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
            <p class="grey--text title" style="text-align:center">Referrals</p>
            <h3 class="display-2" style="text-align:center">{{referrals}}</h3>
          </div>
          <!-- <v-card-title>
              <div>
                <h3 class="headline">Total Earned</h3>
                <h3 class="headline">${{earnings.total_earned}}</h3>
              </div>
          </v-card-title>-->
        </v-card>
      </v-flex>
      <v-flex xs12 sm4>
        <v-card class="mx-2 my-2">
          <div class="pa-2">
            <p class="grey--text title" style="text-align:center">Subscription</p>
            <h3 class="display-2" style="text-align:center">{{days}} days left</h3>
          </div>
          <!-- <v-card-title>
              <div>
                <h3 class="headline">Withdrawn</h3>
                <h3 class="headline">${{earnings.withdrawn}}</h3>
              </div>
          </v-card-title>-->
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import store from "../store.js";
import axios from "axios";

export default {
  data() {
    return {
      loading:false,
      earnings: {},
      days:null,
      referrals:0
    };
  },
  mounted() {
    this.getReferrals();
    this.getEarnings();
    this.getDaysLeft();
  },
  methods: {
    getReferrals() {
      let userId = JSON.parse(localStorage.getItem("user"));
      axios({
        method: "GET",
        url:
          "http://www.vacayplanet.com/ArmageddonApi/public/api/referrals/" +
          userId.id
      })
        .then(response => {
          this.referrals = response.data.referrals.length;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    },
    getEarnings() {
      let user = JSON.parse(localStorage.getItem("user"));
      axios({
        method: "GET",
        url:
          "http://www.vacayplanet.com/ArmageddonApi/public/api/earnings/" +
          user.id
      })
        .then(response => {
          this.earnings = response.data.earnings;
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    },
    getDaysLeft() {
      let user = JSON.parse(localStorage.getItem("user"));
      axios({
        method: "POST",
        url: "http://www.vacayplanet.com/ArmageddonApi/public/api/daysLeft",
        data: { customer_id: user.id }
      })
        .then(response => {
         this.days = response.data.days;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    }
  }
};
</script>

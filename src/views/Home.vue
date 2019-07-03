<template>
  <v-container fill-height fluid>
    <v-layout row wrap align-center align-content-space-between>
      <v-flex xs12>
        <v-flex>
          <h3 class="headline text-xs-center" style="font-weight:bold">Dashboard</h3>
        </v-flex>
        <v-layout row wrap>
          <v-flex xs12 sm4>
            <v-card class="mx-2 my-2">
              <div class="pa-2">
                <p class="grey--text title" style="text-align:center">Personal Balance</p>
                <h4 class="display-1 text-xs-center">${{earnings.total_earned - earnings.withdrawn}}</h4>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card class="mx-2 my-2">
              <div class="pa-2">
                <p class="grey--text title" style="text-align:center">Referrals</p>
                <h4 class="display-1" style="text-align:center">{{referrals}}</h4>
              </div>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4>
            <v-card class="mx-2 my-2">
              <div class="pa-2">
                <p class="grey--text title" style="text-align:center">Subscription</p>
                <h4 class="display-1" style="text-align:center">{{days}} days left</h4>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-layout row wrap>
        <v-flex xs12 sm6 :class="{'text-xs-right':$vuetify.breakpoint.smAndUp, 'text-xs-center' : $vuetify.breakpoint.xs}">
          <img :src="require('../assets/app_store.png')" width="200" height="70" contain />
        </v-flex>
        <v-flex xs12 sm6 :class="{'text-xs-left':$vuetify.breakpoint.smAndUp, 'text-xs-center' : $vuetify.breakpoint.xs}">
          <img :src="require('../assets/play_store.png')" width="200" height="70" contain />
        </v-flex>
      </v-layout>
    </v-layout>

    <my-loader :showDialog="loading"></my-loader>
  </v-container>
</template>

<script>
import store from "../store.js";
import axios from "axios";
import myLoader from "../components/custom_components/MyLoader.vue";

export default {
  components: {
    myLoader
  },
  data() {
    return {
      loading: true,
      earnings: {},
      days: null,
      referrals: 0
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
          if (response.data.earnings != null)
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
          this.loading = false;
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });
    }
  }
};
</script>

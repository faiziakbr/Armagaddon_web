<template>
  <div>
    <v-layout justify-center>
      <h3 class="headline" style="font-weight:bold">Referrals</h3>
    </v-layout>
    <v-layout row wrap v-if="referrals.length > 0">
      <v-flex v-for="item in referrals" :key="item.id" xs12 sm4 md3 lg3 xl2 class="mb-3 py-2 px-2">
        <item-referral style="height: 100%" :itemReferral="item"></item-referral>
      </v-flex>
    </v-layout>
    <v-layout v-else justify-center>
      <p v-if="!loading" class="title red--text">No Referrals!</p>
    </v-layout>
    <app-loader :showDialog="loading"></app-loader>
  </div>
</template>

<script>
import axios from "axios";
import ItemReferral from "../custom_components/ItemReferral.vue";
import MyLoader from "../custom_components/MyLoader.vue";

export default {
  components: {
    ItemReferral,
    appLoader: MyLoader
  },
  data() {
    return {
      loading: true,
      referrals: []
    };
  },
  mounted() {
    let userId = JSON.parse(localStorage.getItem("user"));
    axios({
      method: "GET",
      url:
        "http://www.forexamg.com/ArmageddonApi/public/api/referrals/" +
        userId.id
    })
      .then(response => {
        this.referrals = response.data.referrals;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
        this.loading = false;
      });
  }
};
</script>

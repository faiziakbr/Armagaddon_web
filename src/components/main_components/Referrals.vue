<template>
  <v-layout row wrap>
    <v-flex v-for="item in referrals" :key="item.id" xs12 sm4 md4 lg4 xl3 class="mb-3 py-2 px-2">
      <item-referral style="height: 100%" :itemReferral="item"></item-referral>
    </v-flex>
    <app-loader :showDialog="loading"></app-loader>
  </v-layout>
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
    axios({
      method: "GET",
      url: "http://www.vacayplanet.com/ArmageddonApi/public/api/referrals/"+localStorage.getItem('user_id')
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

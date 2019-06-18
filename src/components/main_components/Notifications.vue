<template >
  <v-layout row wrap >
    <v-flex v-for="item in notifications" :key="item.id" xs12 class="mb-3 py-2 px-2">
      <item-notification style="height: 100%;" :itemNotification="item"></item-notification>
    </v-flex>
    <app-loader :showDialog="loading"></app-loader>
  </v-layout>
</template>

<script>
import axios from "axios";
import MyLoader from "../custom_components/MyLoader.vue";
import ItemNotification from "../custom_components/ItemNotification.vue";

export default {
  components: {
    ItemNotification,
    appLoader: MyLoader
  },
  data() {
    return {
      loading: true,
      notifications: []
    };
  },
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    axios({
      method: "GET",
      url:
        "http://www.vacayplanet.com/ArmageddonApi/public/api/notifications/" +
        user.id
    })
      .then(response => {
        this.notifications = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
        this.loading = false;
      });
  }
};
</script>


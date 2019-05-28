<template>
  <div>
    <v-toolbar app :color="'#000'" flat>
      <img
        v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.md"
        :src="require('../assets/app_logo.png')"
        height="30"
      >
      <img
        v-if="$vuetify.breakpoint.sm || $vuetify.breakpoint.md"
        class="ml-3"
        :src="require('../assets/app_logo.png')"
        height="20"
      >

      <!-- <v-spacer v-if="!$vuetify.breakpoint.lgAndUp"></v-spacer> -->
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon style="color:#f3bf2e" v-on="on">
            <v-icon>notifications</v-icon>
          </v-btn>
        </template>
        <v-list style="max-height: 300px;width:350px; background-color:transparent;">
          <v-flex v-for="(item, index) in notifications" :key="index" style="background-color:#fff">
            <ItemNotification :itemNotification="item"></ItemNotification>
            <v-divider :key="index"></v-divider>
          </v-flex>
        </v-list>
      </v-menu>

      <v-btn icon style="color:#f3bf2e" @click="logout">
        <v-icon>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer
      app
      :clipped="false"
      hide-overlay
      :permanent="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl "
      :temporary="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.md"
    >
      <v-toolbar flat color="#000">
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title" style="color:#f3bf2e">ARMAGEDDON</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <!-- <v-toolbar flat class="#000000">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>-->

      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" @click="menuClick(item)">
          <v-list-tile-action>
            <v-icon style="color:#f3bf2e">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <!-- <v-card-text>Hello</v-card-text> -->
    </v-navigation-drawer>
  </div>
</template>

<script>
import axios from "axios";
import ItemNotification from "../components/custom_components/ItemNotification.vue";
export default {
  components: {
    ItemNotification
  },
  data() {
    return {
      notifications: [],
      items: [
        { id: 1, title: "Signals", icon: "swap_vert" },
        { id: 2, title: "Referrals", icon: "people" },
        { id: 3, title: "Earnings", icon: "attach_money" },
        { id: 4, title: "Payment Methods", icon: "account_balance" }
      ]
    };
  },
  mounted() {
    axios({
      method: "GET",
      url:
        "http://www.vacayplanet.com/ArmageddonApi/public/api/notifications/" +
        localStorage.getItem("user_id")
    })
      .then(response => {
        this.notifications = response.data;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
        this.loading = false;
      });
  },
  methods: {
    menuClick(value) {
      if (value.id == 2) this.$router.push("referrals");
      if (value.id == 3) this.$router.push("earnings");
      if (value.id == 1) this.$router.push("signals");
    },
    // goToNotifications() {
    //   this.$router.push("notifications");
    // },
    logout() {
      this.$store
        .dispatch("logout")
        .then(response => {
          this.$router.push("/login");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<style>
/* .color-white {
  color: white !important;
}
.v-input__slot {
  background-color: unset !important;
}
.input-white * {
  color: white !important;
}
.display-none {
  display: none;
}
.placeholder-grey .v-icon {
  color: lightgray !important;
}
.placeholder-white input::placeholder,
.placeholder-white .v-icon {
  color: white !important;
  opacity: 1 !important;
}
.margin0 .v-input__slot {
  margin-bottom: 0px !important;
} */
</style>



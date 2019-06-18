<template>
  <div>
    <v-toolbar app style="padding-left: 0px" class="primary">
      <!-- <v-avatar >
        <img
          v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.md"
          :src="image"
          @error="imageLoadError"
        >
      </v-avatar>-->
      <v-toolbar-side-icon @click="drawer=true" v-if="$vuetify.breakpoint.mdAndDown">
        <v-icon class="accent--text">menu</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title class="accent--text">Forex Arma</v-toolbar-title>

      <!-- <v-avatar @click="drawer=true">
        <img
          v-if="$vuetify.breakpoint.mdAndDown"
          class="ml-3"
          :src="require('../assets/app_logo.png')"
          height="20"
        >
      </v-avatar>-->

      <!-- <v-spacer v-if="!$vuetify.breakpoint.lgAndUp"></v-spacer> -->
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon color="accent">notifications</v-icon>
          </v-btn>
        </template>
        <v-list style="max-height: 300px;width:350px;">
          <v-flex v-for="(item, index) in notifications" :key="index">
            <ItemNotification :itemNotification="item"></ItemNotification>
            <v-divider :key="index"></v-divider>
          </v-flex>
        </v-list>
      </v-menu>

      <v-btn v-if="$vuetify.breakpoint.lgAndUp" icon @click="logout">
        <v-icon color="accent">exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <!-- style="background-color:#455161" -->

    <v-navigation-drawer
      style="background-color:#000"
      v-model="drawer"
      app
      :clipped="true"
      :permanent="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl "
      :temporary="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm || $vuetify.breakpoint.md"
    >
      <v-img :aspect-ratio="10/9" :src="require('../assets/background_menu.png')">
        <v-layout column align-center  pa-4>
          <v-avatar :size="120" color="grey lighten-4">
            <img :src="image" @error="imageLoadError" alt="avatar">
          </v-avatar>
          <v-card-title>
            <div>
              <h3 class="headline mb-0 accent--text">{{user.first_name}} {{user.last_name}}</h3>
            </div>
          </v-card-title>
        </v-layout>
      </v-img>
      <!-- <v-container>
        <v-layout column align-center>
          <v-avatar :size="100" color="grey lighten-4">
            <img :src="image" @error="imageLoadError" alt="avatar">
          </v-avatar>
          <v-card-title>
            <div>
              <h3 class="headline mb-0 accent--text">{{user.first_name}} {{user.last_name}}</h3>
              <h4 class="mb-0 accent--text" style="text-align:center">{{user.referral_code}}</h4>
            </div>
          </v-card-title>
          <v-btn round color="accent primary--text" @click="openEditDialog">Account</v-btn>
        </v-layout>
      </v-container>-->

      <v-list v-if="$vuetify.breakpoint.mdAndUp">
        <v-list-tile v-for="item in itemsOnLargeScreen" :key="item.title" @click="menuClick(item)">
          <v-list-tile-action>
            <v-icon color="iconColor">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title style="color:#fff">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list v-else>
        <v-list-tile v-for="item in itemsOnSmallScreen" :key="item.title" @click="menuClick(item)">
          <v-list-tile-action>
            <v-icon style="color:#f3bf2e">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title style="color:#fff">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <edit-profile-dialog></edit-profile-dialog>
  </div>
</template>

<script>
import axios from "axios";
import ItemNotification from "../components/custom_components/ItemNotification.vue";
import person from "../assets/person.png";
import EditProfileDialog from "../components/main_components/EditProfileDialog.vue";
import { eventBus } from "../main.js";

export default {
  components: {
    ItemNotification,
    EditProfileDialog
  },
  data() {
    return {
      eventBus,
      drawer: false,
      notifications: [],
      user: {},
      image: "",
      showEditDialog: false,
      itemsOnSmallScreen: [
        { id: 1, title: "Signals", icon: "swap_vert" },
        { id: 2, title: "Referrals", icon: "people" },
        { id: 3, title: "Earnings", icon: "attach_money" },
        { id: 4, title: "Withdraw Methods", icon: "account_balance" },
        { id: 5, title: "Log out", icon: "exit_to_app" }
      ],
      itemsOnLargeScreen: [
        { id: 1, title: "Signals", icon: "swap_vert" },
        { id: 2, title: "Referrals", icon: "people" },
        { id: 3, title: "Earnings", icon: "attach_money" },
        { id: 4, title: "Withdraw Methods", icon: "account_balance" }
      ]
    };
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
    this.image =
      "http://www.vacayplanet.com/ArmageddonApi/public/appImages/" +
      this.user.profile_pic_url;
    axios({
      method: "GET",
      url:
        "http://www.vacayplanet.com/ArmageddonApi/public/api/notifications/" +
        this.user.id
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
      if (value.id == 1) this.$router.push("signals");
      if (value.id == 2) this.$router.push("referrals");
      if (value.id == 3) this.$router.push("earnings");
      if (value.id == 4) this.$router.push("payment_methods");
      if (value.id == 5) this.logout();
    },
    openEditDialog() {
      eventBus.$emit("showDialog", true);
    },
    logout() {
      this.$store
        .dispatch("logout")
        .then(response => {
          this.$router.push("/login");
        })
        .catch(err => console.log(err));
    },
    imageLoadError(event) {
      this.image = person;
      event.target.src = this.image;
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



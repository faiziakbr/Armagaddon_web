<template>
  <div>
    <v-toolbar app :color="'#000'">
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
          <v-flex v-for="(item, index) in notifications" :key="index" class="secondary">
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
      <!-- <v-toolbar color="#000">
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title" style="color:#f3bf2e">ARMAGEDDON</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>-->

      <v-toolbar flat :color="'#000'" @click="openEditDialog">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img :src="image" @error="imageLoadError">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{user.first_name}} {{user.last_name}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-list v-if="$vuetify.breakpoint.mdAndUp">
        <v-list-tile v-for="item in itemsOnLargeScreen" :key="item.title" @click="menuClick(item)">
          <v-list-tile-action>
            <v-icon style="color:#f3bf2e">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>

      <v-list v-else>
        <v-list-tile v-for="item in itemsOnSmallScreen" :key="item.title" @click="menuClick(item)">
          <v-list-tile-action>
            <v-icon style="color:#f3bf2e">{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <edit-profile-dialog :openDialog="showEditDialog"></edit-profile-dialog>
  </div>
</template>

<script>
import axios from "axios";
import ItemNotification from "../components/custom_components/ItemNotification.vue";
import person from "../assets/person.png";
import EditProfileDialog from "../components/main_components/EditProfileDialog.vue";

export default {
  components: {
    ItemNotification,
    EditProfileDialog
  },
  data() {
    return {
      notifications: [],
      user: {},
      image: "",
      showEditDialog: false,
      itemsOnSmallScreen: [
        { id: 1, title: "Signals", icon: "swap_vert" },
        { id: 2, title: "Referrals", icon: "people" },
        { id: 3, title: "Earnings", icon: "attach_money" },
        { id: 4, title: "Payment Methods", icon: "account_balance" }
      ],
      itemsOnLargeScreen:[
        { id: 2, title: "Referrals", icon: "people" },
        { id: 3, title: "Earnings", icon: "attach_money" },
        { id: 4, title: "Payment Methods", icon: "account_balance" }
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
    },
    openEditDialog() {
      this.showEditDialog = true;
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



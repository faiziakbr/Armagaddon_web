<template>
  <v-app>
    <!-- <v-layout column justify-start> -->
    <app-header v-if="isLoggedIn"></app-header>
    <v-content style="background-color:#e8edf0">
      <!-- <p v-if="$vuetify.breakpoint.xs">IT IS XS</p>
        <p v-if="$vuetify.breakpoint.sm">IT IS SM</p>
        <p v-if="$vuetify.breakpoint.md">IT IS MD</p>
        <p v-if="$vuetify.breakpoint.lg">IT IS LG</p>
      <p v-if="$vuetify.breakpoint.xl">IT IS XL</p>-->
      <router-view class="px-3 py-3"></router-view>
    </v-content>

    <div
      style="width:300px; height:400px; position:fixed; bottom: 0px; right:0px; z-index: 9999; border:4px #f3bf2e solid; border-radius:5px"
      v-if="isLoggedIn  && $vuetify.breakpoint.mdAndUp"
      v-show="!showSignals"
    >
      <v-card>
        <v-layout align-content-space-between align-center>
          <v-flex>
            <h1 style="padding-left:10px" class="headline">Signals</h1>
          </v-flex>
          <v-flex class="text-xs-right">
            <v-btn flat icon @click="toggleSignals">
              <v-icon dark>cancel</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>

      <v-divider></v-divider>
      <app-signal-dialog></app-signal-dialog>
      <!-- <span class="color-white">filter</span> -->
    </div>

    <div
      style="position:fixed; bottom: 50px; right:10px; z-index: 9999;"
      v-if="isLoggedIn && $vuetify.breakpoint.mdAndUp"
      v-show="showSignals"
    >
      <v-btn absolute fab top right color="#f3bf2e" @click="toggleSignals">
        <v-badge :value="count > 0 ? true : false">
          <template v-slot:badge>
            <span>{{count}}</span>
          </template>
          <v-icon>swap_vert</v-icon>
        </v-badge>
      </v-btn>
    </div>
    <app-loader :showDialog="loading"></app-loader>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import MyLoader from "./components/custom_components/MyLoader.vue";
import SignalDialog from "./components/custom_components/DialogSignals.vue";
import axios from "axios";
import { eventBus } from "../src/main.js";

export default {
  name: "App",
  components: {
    appHeader: Header,
    appLoader: MyLoader,
    appSignalDialog: SignalDialog
  },
  data() {
    return {
      loading: false,
      showSignals: true,
      count: -1
    };
  },
  created: function() {
    this.$http.interceptors.response.use(undefined, function(err) {
      return new Promise(function(resolve, reject) {
        if (err.status === 401 && err.config && !err.config.__isRetryRequest) {
          this.$store.dispatch(logout);
        }
        throw err;
      });
    });
  },
  mounted() {
    eventBus.$on("signal_counter", data => {
      if (data) this.count = this.count + 1;
    });
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    toggleSignals() {
      this.showSignals = !this.showSignals;
      if (this.showSignals) {
        this.count = 0;
      } else {
        setTimeout(function() {
          eventBus.$emit("scroll_to_bottom", true);
        }, 500);
      }
    }
  },
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    isLoading: function() {
      return this.$store.getters.authStatus;
    }
  },
  updated() {},
  watch: {
    isLoading(value) {
      if (value == "loading") this.loading = true;
      else this.loading = false;
    }
  }
};
</script>

<style>
/* width */
::-webkit-scrollbar {
  width: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: gray;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #f3bf2e;
}
</style>


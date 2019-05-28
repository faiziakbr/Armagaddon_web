<template>
  <v-app dark>
    <!-- <v-layout column justify-start> -->
    <app-header v-if="isLoggedIn"></app-header>
    <v-content>
      <!-- <p v-if="$vuetify.breakpoint.xs">IT IS XS</p>
        <p v-if="$vuetify.breakpoint.sm">IT IS SM</p>
        <p v-if="$vuetify.breakpoint.md">IT IS MD</p>
        <p v-if="$vuetify.breakpoint.lg">IT IS LG</p>
      <p v-if="$vuetify.breakpoint.xl">IT IS XL</p>-->
      <router-view></router-view>
    </v-content>

    <div
      style="width:300px; height:400px; position:fixed; bottom: 0px; right:0px; z-index: 9999; border:2px #f3bf2e solid; background-color:#000"
      v-if="isLoggedIn"
      v-show="showSignals"
    >
      <v-layout align-content-space-between align-center>
        <v-flex>
          <h1 style="color:#fff; padding-left:10px" class="headline">Signals</h1>
        </v-flex>
        <v-flex class="text-xs-right">
          <v-btn flat icon color="white" @click="toggleSignals">
            <v-icon dark>cancel</v-icon>
          </v-btn>
        </v-flex>
      </v-layout>

      <v-divider></v-divider>
      <app-signal-dialog></app-signal-dialog>
      <!-- <span class="color-white">filter</span> -->
    </div>

    <div
      style="position:fixed; bottom: 50px; right:10px; z-index: 9999;"
      v-if="isLoggedIn"
      v-show="!showSignals"
    >
      <v-btn absolute dark fab top right color="#f3bf2e" @click="toggleSignals">
        <v-icon>swap_vert</v-icon>
      </v-btn>
    </div>

    <!-- </v-layout> -->

    <!-- <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
        <span v-if="isLoggedIn">
          <a @click="logout">Logout</a>
        </span>
      </div>
      <router-view/>
    </div>-->
    <app-loader :showDialog="loading"></app-loader>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import MyLoader from "./components/custom_components/MyLoader.vue";
import SignalDialog from "./components/custom_components/DialogSignals.vue";
import axios from "axios";

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
      showSignals: true
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
  computed: {
    isLoggedIn: function() {
      return this.$store.getters.isLoggedIn;
    },
    isLoading: function() {
      return this.$store.getters.authStatus;
    }
  },
  methods: {
    logout: function() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
    toggleSignals() {
      this.showSignals = !this.showSignals;
    }
  },
  watch: {
    isLoading(value) {
      if (value == "loading") this.loading = true;
      else this.loading = false;
    }
  }
};
</script>

<template>
  <v-card>
    <!-- <v-img class="white--text" height="200px" :src="image" @error="imageLoadError">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span
              v-if="imageError"
              class="headline"
              style="color:black"
            >{{referral.customer.first_name}}</span>
            <span v-else class="headline">{{referral.customer.first_name}}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-title>
      <div>
        <span class="grey--text">{{referral.customer.referral_code}}</span>
        <br>
        <span>{{referral.customer.email}}</span>
        <br>
        <span>{{referral.customer.city}} {{referral.customer.country}}</span>
      </div>
    </v-card-title>-->
    <v-container>
      <v-layout column align-center>
        <v-avatar :size="150">
          <img :src="image" @error="imageLoadError">
        </v-avatar>
        <v-card-title>
          <div>
            <h3
              style="text-align:center"
              class="headline mb-0"
            >{{referral.customer.first_name}} {{referral.customer.last_name}}</h3>
            <h4 class="mb-0" style="text-align:center">{{referral.customer.email}}</h4>
          </div>
        </v-card-title>
        <v-card-text>
          <div style="text-align:center">
            <p style="color:#8cafd5">{{referral.customer.referral_code}}</p>
            <p style="color:#8cafd5">{{referral.customer.city}} {{referral.customer.country}}</p>
          </div>
        </v-card-text>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import person from "../../assets/person.png";

export default {
  props: ["itemReferral"],
  data() {
    return {
      referral: this.itemReferral,
      image: null,
      imageError: false
    };
  },
  mounted() {
    this.image =
      "http://www.forexamg.com/ArmageddonApi/public/appImages/" +
      this.referral.customer.profile_pic_url;
  },
  methods: {
    imageLoadError() {
      this.image = person;
      this.imageError = true;
    }
  }
};
</script>

<template>
  <v-card>
    <v-img class="white--text" height="200px" :src="image" @error="imageLoadError">
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
    </v-card-title>
    <!-- <v-card-actions>
      <v-btn flat color="orange">Share</v-btn>
      <v-btn flat color="orange">Explore</v-btn>
    </v-card-actions> -->
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
      "http://www.vacayplanet.com/ArmageddonApi/public/appImages/" +
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

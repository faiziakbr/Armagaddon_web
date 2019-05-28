<template>
  <v-layout row wrap>
    <v-flex v-for="(item, index) in signals" :key="index" xs12 class="mb-3 py-2 px-2">
      <v-card-title>{{item.message}}</v-card-title>
    </v-flex>
  </v-layout>
</template>

<script>
import { signalRefrance } from "../../main.js";

export default {
  data() {
    return {
      loading: true,
      signals: []
    };
  },
  mounted() {
    signalRefrance.on("value", snapshot => {
      snapshot.forEach(data => {
          console.log(data.val());
        this.signals.push(data.val());
      });
    });
  }
};
</script>


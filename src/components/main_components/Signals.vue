<template>
  <v-layout row wrap>
    <v-flex v-for="(item, i) in signals" :key="i" xs12 class="mb-3 py-2 px-2">
      <item-signal v-if="i == 0" :signal="item"></item-signal>
      <item-signal v-else :signal="item" :pDate="signals[--i].date"></item-signal>
    </v-flex>
  </v-layout>
</template>

<script>
import { signalRefrance } from "../../main.js";
import ItemSignal from "../custom_components/ItemSignal.vue";

export default {
  components: {
    ItemSignal
  },
  data() {
    return {
      loading: true,
      signals: []
    };
  },
  mounted() {
    signalRefrance.on("value", snapshot => {
      snapshot.forEach(data => {
        this.signals.push(data.val());
      });
    });
  }
};
</script>


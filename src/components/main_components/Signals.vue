<template>
  <div>
    <v-layout justify-center>
      <h3 class="headline" style="font-weight:bold">Signals</h3>
    </v-layout>

    <!-- Do not delete this -->
    <!-- <v-layout v-for="(item, i) in signals" :key="i" xs12 class="mb-3 py-2 px-2">
      <item-signal v-if="i == 0" :signal="item"></item-signal>
      <item-signal v-else :signal="item" :pDate="signals[--i].date"></item-signal>
    </v-layout>-->
    <div v-for="(item, i) in signals" :key="i" xs12 class="mb-3 py-2 px-2">
      <item-signal v-if="i == 0" :signal="item"></item-signal>
      <item-signal v-else :signal="item" :pDate="signals[--i].date"></item-signal>
    </div>
  </div>
</template>

<script>
import { signalRefrance } from "../../main.js";
import ItemSignal from "../custom_components/ItemSignal.vue";
import moment from "moment";

export default {
  components: {
    ItemSignal
  },
  data() {
    return {
      loading: true,
      signals: [],
      offsetTop: 0
    };
  },
  mounted() {
    this.fetchSignals();
  },
  methods: {
    fetchSignals() {
      signalRefrance.on("value", snapshot => {
        let temp = [];
        snapshot.forEach(data => {
          temp.push(data.val());
        });
        temp.sort(
          (a, b) =>
            new Date(moment(a.date).format("MM/DD/YYYY hh:mm:ss")) -
            new Date(moment(b.date).format("MM/DD/YYYY hh:mm:ss"))
        );
        this.signals = temp;
        this.scrollToBottom();
        // setTimeout(function() {
        //   this.scrollToBottom();
        // }, 500);
      });
    },
    scrollToBottom() {
      this.$vuetify.goTo(999999999, this.options);
    }
  },
  computed: {
    options() {
      return {
        duration: 1000,
        offset: 0,
        easing: "easeInOutCubic"
      };
    }
  }
};
</script>


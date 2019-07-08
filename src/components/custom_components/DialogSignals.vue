<template>
  <div style="padding:10px; background-color:#fff" id="scrolled-content">
    <v-list style="height:330px" class="scroll-y" id="scroll-target">
      <div v-for="(item, i) in signals" :key="i" xs12  class="pa-2">
        <item-signal v-if="i == 0" :signal="item"></item-signal>
        <item-signal v-else :signal="item" :pDate="signals[--i].date"></item-signal>
      </div>
    </v-list>
  </div>
</template>

<script>
import { signalRefrance } from "../../main.js";
import moment from "moment";
import ItemSignal from "../custom_components/ItemSignal.vue";
import { eventBus } from "../../main.js";

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
    this.fetchSignals();
    eventBus.$on("scroll_to_bottom", data => {
      if (data) this.scrollToBot();
    });
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
        eventBus.$emit("signal_counter", true);
        this.signals = temp;
        setTimeout(function() {
          this.elem = document.getElementById("scrolled-content");
          this.container = document.getElementById("scroll-target");
          this.container.scrollTop = this.elem.offsetHeight + 99999;
        }, 500);
      });
    },
    scrollToBot() {
      this.elem = document.getElementById("scrolled-content");
      this.container = document.getElementById("scroll-target");
      this.container.scrollTop = this.elem.offsetHeight + 9999999;
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
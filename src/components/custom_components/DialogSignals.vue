<template>
  <div style="padding:10px; background-color:#fff" id="scrolled-content">
    <!-- <button @click="scrollToBot">test</button> -->
    <v-list style="height:330px" class="scroll-y" id="scroll-target">
      <v-flex v-for="(item, i) in signals" :key="i" xs12>
        <!-- <p v-if="i == 0">{{item.date}}</p>
        <p
          v-else-if="new Date(moment(signals[--i].date).format('MM/DD/YYYY')) != new Date(moment(item.date).format('MM/DD/YYYY'))"
        >{{item.date}}</p>-->
        <item-signal v-if="i == 0" :signal="item"></item-signal>
        <item-signal v-else :signal="item" :pDate="signals[--i].date"></item-signal>
      </v-flex>
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
    // this.scrollToBot();
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
          this.scrollToBot();
        }, 500);
      });
    },
    scrollToBot() {
      this.elem = document.getElementById("scrolled-content");
      this.container = document.getElementById("scroll-target");
      this.container.scrollTop = this.elem.offsetHeight + 99999;
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
  },
  updated() {
    
  }
};
</script>
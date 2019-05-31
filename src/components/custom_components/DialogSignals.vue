<template>
  <div style="padding:10px;" class="secondary">
    <v-list style="height:350px" class="scroll-y">
      <v-flex v-for="(item, i) in signals" :key="i" xs12 id="myChat">
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

export default {
  components: {
    ItemSignal
  },
  data() {
    return {
      loading: true,
      signals: [],
    };
  },
  mounted() {
    this.fetchSignals();
  },
  methods: {
    fetchSignals() {
      let temp = [];
      signalRefrance.on("value", snapshot => {
        snapshot.forEach(data => {
          temp.push(data.val());
        });
        temp.sort(
          (a, b) =>
            new Date(moment(a.date).format("MM/DD/YYYY hh:mm:ss")) -
            new Date(moment(b.date).format("MM/DD/YYYY hh:mm:ss"))
        );
      });
      this.signals = temp;
    }
  }
};
</script>
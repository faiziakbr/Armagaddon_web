<template>
  <div style="padding:10px;" class="secondary">
    <v-list style="height:350px" class="scroll-y" >
      <v-flex v-for="(item, index) in signals" :key="index" xs12 id="myChat">
        <p>{{item.message}}</p>
      </v-flex>
    </v-list>
  </div>
</template>

<script>
import { signalRefrance } from "../../main.js";
import moment from "moment";

export default {
  data() {
    return {
      loading: true,
      signals: []
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
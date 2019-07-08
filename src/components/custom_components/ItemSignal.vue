<template>
  <div>
    <p class="text-xs-center" v-if="fomattedPreviousDate != formattedDate">{{formattedDate}}</p>
    <!-- <div class="my-2 mr-2 pa-1" style="background-color:#bdbfc1; border-radius:30px;"> -->
    <v-layout>
      <h4
        class="subheading"
        style="padding:8px; color:#000; background-color:#bdbfc1; border-radius:30px;"
      >{{item.message}}<span style="color:#5b5b5c; font-size:10px; padding-left:15px">{{time}}</span></h4>
    </v-layout>
    <!-- </div> -->
  </div>
</template>

<script>
import moment from "moment";

export default {
  props: ["signal", "pDate"],
  data() {
    return {
      item: this.signal,
      formattedDate: null,
      fomattedPreviousDate: null,
      previousDate: this.pDate,
      time:null
    };
  },
  mounted() {
    this.time = moment(this.item.date).format("hh:mm");
    this.formattedDate = moment(this.item.date).format("MMM DD, YYYY");
    if (this.previousDate != undefined)
      this.fomattedPreviousDate = moment(this.previousDate).format(
        "MMM DD, YYYY"
      );
  }
};
</script>


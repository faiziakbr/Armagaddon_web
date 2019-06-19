<template>
  <div>
    <p class="text-xs-center" v-if="fomattedPreviousDate != formattedDate">{{formattedDate}}</p>
    <v-card class="my-2 mr-2" style="background-color:#bdbfc1; border-radius:50px">
      <h4 style="padding:5px; border-radius:10px; color:#000">{{item.message}}</h4>
    </v-card>
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
      previousDate: this.pDate
    };
  },
  mounted() {
    this.formattedDate = moment(this.item.date).format("MMM DD, YYYY");
    if (this.previousDate != undefined)
      this.fomattedPreviousDate = moment(this.previousDate).format(
        "MMM DD, YYYY"
      );
  }
};
</script>


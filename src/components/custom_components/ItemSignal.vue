<template>
  <v-card class="my-2 mr-2">
    <p class="text-xs-center" v-if="fomattedPreviousDate != formattedDate">{{formattedDate}}</p>
    <p style="background-color:#c0c0c0; padding:5px; border-radius:10px">{{item.message}}</p>
  </v-card>
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


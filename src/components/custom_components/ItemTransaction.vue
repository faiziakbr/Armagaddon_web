<template>

    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-layout>
            <v-flex>
              <v-card-text>{{formatedData}}</v-card-text>
            </v-flex>
            <v-flex>
              <v-card-text
                class="text-xs-center"
                v-if="transaction.type == 'referral'"
              >{{transaction.referral_customer.first_name}}</v-card-text>
            </v-flex>
            <v-flex>
              <v-card-text class="text-xs-right">${{transaction.amount}}</v-card-text>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>

</template>

<script>
import moment from "moment";

export default {
  props: ["itemTransaction"],
  data() {
    return {
      transaction: this.itemTransaction,
      formatedData: null
    };
  },
  mounted() {
    this.formatedData = moment(this.transaction.created_at).format(
      "MMM DD, YYYY"
    );
  }
};
</script>
<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <!-- <form action="https://sandbox.payfast.co.za/eng/process" method="POST">
        <input type="hidden" name="merchant_id" value="10000100">
        <input type="hidden" name="merchant_key" value="46f0cd694581a">
        <input type="hidden" name="return_url" value="https://www.yoursite.com/return">
        <input type="hidden" name="cancel_url" value="https://www.yoursite.com/cancel">
        <input type="hidden" name="notify_url" value="https://www.yoursite.com/notify">
        <input name="amount" value="500">
        <input name="item_name" value="myItem">
        <button type="submit" value="submit">submit</button>
      </form>-->
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Pay</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <form action="https://sandbox.payfast.co.za/eng/process" method="POST">
            <v-card-text>
              <input type="hidden" name="merchant_id" value="10012785">
              <input type="hidden" name="merchant_key" value="3vnc7o0v1771c">
              <input type="hidden" name="return_url" value="https://www.google.com">
              <input type="hidden" name="cancel_url" value="https://www.yahoo.com">
              <input type="hidden" name="notify_url" value="http://192.168.0.101:8080/checkout">
              <input type="hidden" name="amount" value="500">
              <input type="hidden" name="item_name" value="subscription">
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" value="submit" color="primary">Pay</v-btn>
              <!-- <v-btn color="accent" @click="payfast">Payfast</v-btn> -->
            </v-card-actions>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

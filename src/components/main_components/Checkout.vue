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
          <v-card-text class="subheading">Please make payment of 400.00 ZAR to use services.</v-card-text>
          <form action="https://sandbox.payfast.co.za/eng/process" method="POST">
            <v-card-text>
              <input type="hidden" name="merchant_id" value="10012785">
              <input type="hidden" name="merchant_key" value="3vnc7o0v1771c">
              <input type="hidden" name="return_url" value="http://forex-arma.herokuapp.com/">
              <input type="hidden" name="cancel_url" value="https://www.yahoo.com">
              <input type="hidden" name="notify_url" value="http://www.vacayplanet.com/ArmageddonApi/public/api/subscribe">
              <input type="hidden" name="custom_int1" :value="user_id">
              <input type="hidden" name="amount" value="400">
              <input type="hidden" name="item_name" value="subscription">
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn type="submit" value="submit" color="accent">Pay</v-btn>
            </v-card-actions>
          </form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
   data() {
    return {
      user_id: -1
    };
  },
  mounted(){
    let user = JSON.parse(localStorage.getItem("user"));
    if(user != null){
    this.user_id = user.id;
    console.log(this.user_id);
    }else{
      this.$router.push('/login');
    }
  }
};
</script>

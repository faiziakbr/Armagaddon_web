<template>
  <div>
    <h1>This is an Home page</h1>
  </div>
</template>

<script>
import store from '../store.js';

export default {
  data() {
    return {
      
    };
  },
  mounted(){
    // console.log(store.getters.isLoggedIn);
    // console.log(store.getters.authStatus);
    
  },
  computed:{
    loggedUser() {
      var user = this.$store.getters.loggedInUser;
    }
  }
};
</script>

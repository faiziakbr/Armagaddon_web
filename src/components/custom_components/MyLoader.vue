<template>
  <v-dialog v-model="showDialog" hide-overlay persistent width="300">
    <v-card color="primary" dark>
      <v-card-text>
        Please stand by
        <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ["showDialog"],
  data() {
    return {
      dialog: this.showDialog
    };
  },

  watch: {
    dialog(val) {
      if (!val) return;
    }
  }
};
</script>

<style>
/* .v-dialog {
    position: absolute;
    bottom: 0;
    right: 0;
} */
</style>


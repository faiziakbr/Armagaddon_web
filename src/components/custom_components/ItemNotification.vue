<template>
  <v-list-tile style="background-color:#fff;" class="px-2">
    <v-list-tile-avatar>
      <v-icon class="accent" color="#fff">person</v-icon>
    </v-list-tile-avatar>

    <v-list-tile-content>
      <v-list-tile-title v-html="item.notification.notification.title"></v-list-tile-title>
      <v-list-tile-sub-title v-html="item.notification.notification.body"></v-list-tile-sub-title>
    </v-list-tile-content>
  </v-list-tile>
</template>

<script>
export default {
  props: ["itemNotification"],
  data() {
    return {
      item: this.itemNotification
    };
  }
};
</script>



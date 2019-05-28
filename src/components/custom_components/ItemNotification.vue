<template>
    <v-list-tile>
      <v-list-tile-avatar>
        <v-icon>person</v-icon>
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



<template>
  <q-btn class="menu-button" :flat="selected" push :to="route" v-bind:color="selected ? 'purple-8' : 'default'">{{
    text }}
  </q-btn>
</template>

<style>
.menu-button {
  width: fit-content !important;
  color: pink;
}

.selected-choice {
  color: orange;
  background-color: rgb(12, 139, 0);
}
</style>

<script>
export default {
  name: 'MenuButton',
  props: {
    text: String,
    route: String,
    selected: Boolean
  }
}
</script>

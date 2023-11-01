<template>
  <q-btn push :to="route" :class="{ 'selected-choice': selected }">{{ text }} {{ selected }}</q-btn>
</template>

<style>
.q-btn {
  background-color: teal;
}
.selected-choice {
  background-color: darkcyan;
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

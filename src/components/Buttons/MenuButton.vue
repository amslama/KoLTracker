<template>
  <q-btn-group push>
    <q-btn push :to="route">{{ text }}</q-btn>
  </q-btn-group>
</template>

<style></style>

<script>
export default {
  name: 'MenuButton',
  props: {
    text: String,
    route: String
  }
}
</script>

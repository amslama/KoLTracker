<template>
    <q-btn push color="secondary" :to="route">{{ text }}</q-btn>
</template>
  
<style>
.q-btn {
    width: 15rem;
    height: 3rem;
}
</style>
  
<script>
export default {
    name: 'LinkButton',
    props: {
        text: String,
        route: String
    }
}
</script>
  
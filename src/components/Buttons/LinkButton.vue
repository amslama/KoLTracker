<template>
    <q-btn push color="secondary" :to="route"><q-icon name="icon"></q-icon>{{ text }}</q-btn>
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
        route: String,
        icon: String
    }
}
</script>
  
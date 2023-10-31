<template>
    <q-btn push color="secondary">{{ text }}</q-btn>
</template>
  
<style>
.q-btn {
    width: 15rem;
    height: 3rem;
}
</style>
  
<script>
export default {
    name: 'StandardButton',
    props: {
        text: String
    }
}
</script>
  
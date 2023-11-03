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
    name: 'SellView',
    props: {
        text: String
    }
}
</script>
  
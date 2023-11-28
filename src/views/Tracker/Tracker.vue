<template>
  <q-page class="flex flex-center">
    <LinkButton text="butts" />
  </q-page>
</template>

<style></style>

<script lang="ts">
import LinkButton from '../../components/Buttons/LinkButton.vue'
import { useGlobalStore } from '../../stores/global'

export default {
  setup() {
    return {}
  },
  created() {
    useGlobalStore().setMainPageName('Tracker')
    console.log('here')

  }
}
</script>

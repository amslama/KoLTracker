<template>
  <q-page class="flex flex-center">
    <LinkButton v-for="option in options" :key="option.text" :route="option.route" :text="option.text"
      @click="onPageChange(option.text)" />
  </q-page>
</template>

<style></style>

<script lang="ts">
import LinkButton from '../../components/Buttons/LinkButton.vue'
import { useGlobalStore } from '../../stores/global'
import { MenuOptions } from './constants'

export default {
  name: 'MainMenu',
  data() {
    return {
      options: MenuOptions
    }
  },
  created() {
    useGlobalStore().setMainPageName('Main Menu')
  },

  components: {
    LinkButton
  }
}
</script>

<template>
  <q-page class="flex flex-center">
    <LinkButton v-for="option in options" :key="option.text" :route="option.route" :text="option.text" />
  </q-page>
</template>

<style></style>

<script>
import LinkButton from '../../components/Buttons/LinkButton.vue'
import { MenuOptions } from './constants'
export default {
  name: 'MainMenu',
  data() {
    return {
      options: MenuOptions,
    }
  },
  components: {
    LinkButton
  },
}
</script>

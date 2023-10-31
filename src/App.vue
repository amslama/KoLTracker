<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>

        <q-toolbar-title>
          {{ pageTitle }}
        </q-toolbar-title>

        <div> {{ 'here be hot links' }}</div>
      </q-toolbar>
    </q-header>


    <q-page-container>
      <RouterView></RouterView>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import MainMenu from './views/MainMenu/MainMenu.vue'

export default {
  name: 'LayoutDefault',
  components: {
    MainMenu
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
      pageTitle: 'Main Menu',
    }
  }
}
</script>

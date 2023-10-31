<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>

        <q-toolbar-title>
          {{ pageTitle }}
        </q-toolbar-title>
        <span><strong>Links: </strong></span>
        <MenuButton v-for="option in toolbarOptions" :key="option.text" :route="option.route" :text="option.text" />
      </q-toolbar>
    </q-header>


    <q-page-container>
      <RouterView></RouterView>
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import MainMenu from '../MainMenu/MainMenu.vue'
import { TrackerOptions } from './constants'
import MenuButton from '../../components/Buttons/MenuButton.vue'

export default {
  name: 'LayoutDefault',
  data(){
    return {
     toolbarOptions: TrackerOptions
  }},
  components: {
    MainMenu,
    MenuButton
},

  setup() {
    return {
      leftDrawerOpen: ref(false),
      pageTitle: 'Main Menu',
    }
  }
}
</script>

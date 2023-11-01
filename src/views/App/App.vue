<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-toolbar-title>
          {{ pageTitle }}
        </q-toolbar-title>
        <q-btn-group push>
          <MenuButton
            v-for="option in toolbarOptions"
            :key="option.text"
            :route="option.route"
            :text="option.text"
            :selected="option.text === selected"
            @click="onPageSelect(option.text)"
          />
        </q-btn-group>
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
  data() {
    return {
      toolbarOptions: TrackerOptions,
      selected: 'Add'
    }
  },
  components: {
    MainMenu,
    MenuButton
  },
  methods: {
    onPageSelect(name) {
      this.selected = name
      console.log(this.selected)
    }
  },

  setup() {
    return {
      leftDrawerOpen: ref(false),
      pageTitle: 'Main Menu'
    }
  }
}
</script>

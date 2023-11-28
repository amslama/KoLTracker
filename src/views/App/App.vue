<template>
  <div class="q-pa-md">
    <q-layout view="hHh Lpr lff">
      <q-header elevated class="glossy">
        <q-toolbar class="bg-cyan-8">
          <q-btn class="menu-button" flat @click="drawer = !drawer" round dense icon="menu" />

          <q-toolbar-title>
            {{ pageTitle }}
          </q-toolbar-title>
          <q-btn-group push>
            <MenuButton v-for="option in toolbarOptions" :key="option.text" :route="option.route" :text="option.text"
              :selected="option.text === selected" @click="onPageSelect(option.text)" />
          </q-btn-group>
        </q-toolbar>
      </q-header>

      <q-drawer v-model="drawer" show-if-above :width="200" :breakpoint="700" elevated class="bg-secondary text-black">
        <q-scroll-area class="fit">
          <q-list>
            <template v-for="(menuItem, index) in sideBarLinks" :key="index">
              <LinkButton label="menuItem.text" route="menuItem.route" icon="menuItem.icon" />
              <q-separator :key="'sep' + index" v-if="menuItem.separator" />
            </template>
          </q-list>
        </q-scroll-area>
      </q-drawer>
      <q-page-container>
        <RouterView></RouterView>
      </q-page-container>
    </q-layout>
  </div>
</template>

<style></style>

<script lang="ts">
import { ref } from 'vue'
import { TrackerOptions, SideBarLinks } from './constants'
import MenuButton from '../../components/Buttons/MenuButton.vue'
import { useGlobalStore } from '../../stores/global'
import { computed } from '@vue/reactivity'

export default {
  name: 'LayoutDefault',
  setup() {
    const toolbarOptions = TrackerOptions
    let selected = 'Add'
    const store = useGlobalStore()
    let drawer = ref(false)
    let pageTitle = computed(() => {
      return store.pageTitle
    })
    let sideBarLinks = SideBarLinks
    console.log(sideBarLinks)

    return {
      drawer,
      selected,
      toolbarOptions,
      pageTitle,
      sideBarLinks
    }
  },
  components: {
    MenuButton
  },
  methods: {
    onPageSelect(name) {
      this.selected = name
      console.log(this.selected)
    }
  },
  computed: {}
}
</script>

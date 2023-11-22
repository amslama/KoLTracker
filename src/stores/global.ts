import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    pageTitle: 'Main Menu'
  }),
  actions: {
    updatePageTitle(pageTitle: string) {
      const route = useRoute()
      // Extract the path and replace '/' with ' - '
      console.log(route.path)
      console.log(route)
      this.pageTitle = route.path.replace(/\//g, ' - ') || 'Default Title'
    }
  }
})

import { defineStore } from 'pinia'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    pageTitle: 'Main Menu'
  }),
  actions: {
    setPageTitle(pageTitle: string) {
      this.pageTitle = pageTitle
    }
  }
})

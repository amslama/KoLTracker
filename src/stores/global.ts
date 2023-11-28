import { defineStore } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

export const useGlobalStore = defineStore('global', {
  state: () => ({
    pageTitle: '',
    mainPage: 'Main Menu',
    subPage: ''
  }),
  actions: {
    setMainPageName(pageName: string) {this.mainPage = pageName; this.updatePageTitle()},
    updatePageTitle(path?: string) {
      console.log(path)
      // Extract the path and replace '/' with ' - '
      this.pageTitle = this.mainPage
      const splitPath = path?.split('/').slice(2) ?? [];
      (splitPath ?? []).forEach((pathPart) => {
        if(pathPart != ''){
          this.pageTitle += ' - ' + this.capitalize(pathPart)
        }
      });
    },

    capitalize(word:string){
      return word.charAt(0).toUpperCase()
      + word.slice(1)
    }
  }
})

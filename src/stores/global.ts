import { defineStore } from 'pinia';

export const useGlobalStore = defineStore({
  id: 'global',
  state: () => ({
    pageTitle: 'Main Menu',
  }),
  actions: {
    setPageTitle(pageTitle: string) {
      this.pageTitle = pageTitle;
    },
  },
});
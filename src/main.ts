import './assets/main.css'

import { createApp } from 'vue'

import App from  './views/App/App.vue'
import MainMenu from './views/MainMenu/MainMenu.vue'
import Tracker from './views/Tracker/Tracker.vue'


import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'
import * as VueRouter from 'vue-router'
import AddView from './components/Tracker/Pages/Add.vue'
import SellView from './components/Tracker/Pages/Sell.vue'
import ViewView from './components/Tracker/Pages/Sell.vue'
import { createPinia } from 'pinia'
import { useGlobalStore } from './stores/global'

    const routes = [
        { path: '/', component: MainMenu },
        { path: '/tracker', component: Tracker, children:[
          {path: 'add', component:AddView}, { path: 'sell', component: SellView}, {path: 'view', component: ViewView}
        ] },
      ]


const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  })
const app = createApp(App).use(Quasar, quasarUserOptions)
const pinia = createPinia();
pinia.use(useGlobalStore);

app.use(router)

app.mount('#app')

import { boot } from 'quasar/wrappers'
import global from '../stores/global'

export default boot(({ app }) => {
  app.use(global)
})

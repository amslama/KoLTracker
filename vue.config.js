const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  runtimeCompiler:true,
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
})

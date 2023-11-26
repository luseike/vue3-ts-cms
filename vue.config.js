const { defineConfig } = require('@vue/cli-service')
const path = require('path')

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './build',
  configureWebpack: (config) => {
    config.resolve.alias = {
      '@': path.resolve(__dirname, 'src'),
      components: '@/components'
    }
    if (!config.plugins) {
      config.plugins = []
    }
    config.plugins.push(
      AutoImport({
        resolvers: [ElementPlusResolver()]
      })
    )
    config.plugins.push(
      Components({
        resolvers: [ElementPlusResolver()]
      })
    )
  }
})

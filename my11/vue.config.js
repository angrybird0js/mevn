const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false //js .map 파일을 생성하지 않는다. map 파일 생성시 사이트 디버깅 가능
})

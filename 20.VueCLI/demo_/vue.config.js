const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    port: 8877,
    // 开启代理服务器(方式一)
    // proxy: 'http://localhost:5000',

    //开启代理服务器(方式二)
    proxy: {
      '/test': {
        // 代理路径匹配，必须以/test为前缀的才会被转发
        target: 'http://localhost:5000',
        pathRewrite: { '^/test': '' }, // 匹配所有/test开头的路径然后替换成空字符串
        ws: true, // 用于支持webSocket
        changeOrigin: true
      }
    }
    /* 
     changeOrigin 设置为true, 服务器收到的请求头中的host为: localhost:5000
     changeOrigin 设置为false, 服务器收到的请求头中的host为: localhost:8080
     changeOrigin默认为true
    */
  }
})


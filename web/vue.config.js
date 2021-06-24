module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false, // 没有配置 https
    // 以上的ip和端口是我们本机的;下面为需要跨域的
    proxy: {
      // 匹配以 /api 开头请求
      '/api': {
        target: 'https://api.qq.jsososo.com', // 后台真实地址
        ws: true,
        changOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '' // 在实际请求中删除 /api
        }
      }
    }
  }
}

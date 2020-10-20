import { createProxyMiddleware } from 'http-proxy-middleware'

module.exports = function (app: any) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://api.jybkw.cn',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '',
      },
    })
  ),
  app.use(
    createProxyMiddleware('/tao', {
      target: 'https://api.ghser.com',
      changeOrigin: true
    })
  )
}

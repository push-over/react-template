const {
  override,
  fixBabelImports,
  addWebpackAlias,
  addDecoratorsLegacy
} = require('customize-cra')

const path = require('path')

const resolve = dir => path.join(__dirname, dir)

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  }),
  addWebpackAlias({
    '@': resolve('src'),
  }),
  (config) => {
    const loaders = config.module.rules.find(rule => Array.isArray(rule.oneOf)).oneOf;
    loaders[5].use.push({
      loader: 'style-resources-loader',
      options: {
        patterns: [
          resolve('src/styles/_variables.scss'),
          resolve('src/styles/mixins/_config.scss'),
          resolve('src/styles/mixins/_function.scss'),
          resolve('src/styles/mixins/_utils.scss'),
          resolve('src/styles/mixins/_index.scss'),
        ]
      }
    })
    return config
  }
)

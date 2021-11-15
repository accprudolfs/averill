const { merge } = require('webpack-merge')
const prod = require('./prod')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

process.env.NODE_ENV = 'production'

module.exports = merge(prod, {
  plugins: [new BundleAnalyzerPlugin()],
})

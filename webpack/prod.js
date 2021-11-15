const { merge } = require('webpack-merge')
const TerserJSPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
// const purgeCSS = require('@fullhuman/postcss-purgecss')
const common = require('./common.js')

process.env.NODE_ENV = 'production'

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [new TerserJSPlugin({}), new CssMinimizerPlugin({})],
  },
  plugins: [
    // purgeCSS({
    //   content: [
    //     './App.js',
    //   ],
    //   css: ['./main.css'],
    // }),
  ],
})

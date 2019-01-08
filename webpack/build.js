/** create by songbw 2019/1/8 */
const merge = require('webpack-merge')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const base = require('./base')

module.exports = merge(base, {
  mode: 'production',
  output: {
    // publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          MiniCSSExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: "[id].css"
    })
  ]
})
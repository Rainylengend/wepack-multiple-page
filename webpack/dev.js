/** create by songbw 2019/1/8 */
const merge = require('webpack-merge')

const base = require('./base')

module.exports = merge(base, {
  mode: 'development',
  devServer: {
    port: 8080,
    inline: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      }
    ]

  }

})
/** create by songbw 2019/1/8 */
const fs = require('fs')
const PATH = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

function resolve (name, dir = '../src/js') {
  return PATH.resolve(__dirname, dir, name)
}
module.exports = {
  entry: {
    index: resolve('index.js'),
    'page/about': resolve('about.js')
  },
  output: {
    filename: '[name].js',
    path: PATH.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    alias: {
      '$src': PATH.resolve(__dirname, '../src')
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      chunks: ['index'],
      template: resolve('index.html', '../src')
    }),
    new htmlWebpackPlugin({
      filename: 'page/about.html',
      chunks: ['page/about'],
      template: resolve('about.html', '../src/page')
    })
  ]
}
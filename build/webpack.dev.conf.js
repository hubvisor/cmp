const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(require('./webpack.base.conf'), {
  mode: 'development',
  devtool: '#cheap-module-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: 'dev/index.html'
    })
  ],
  serve: {
    open: true
  }
})

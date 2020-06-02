const merge = require('webpack-merge')

module.exports = merge(require('./webpack.base.conf'), {
  mode: 'production',
  devtool: '#hidden-source-map'
})

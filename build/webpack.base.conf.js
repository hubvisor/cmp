const path = require('path')

function resolve (relPath) {
  return path.resolve(__dirname, '..', relPath)
}

module.exports = {
  entry: './src',
  resolve: {
    alias: {
      '@hubvisor/client-core': path.dirname(require.resolve('@hubvisor/client-core'))
    }
  },
  output: {
    path: resolve('dist/umd'),
    filename: 'index.js',
    library: 'Hubvisor',
    libraryTarget: 'umd',
    libraryExport: 'default'
  },
  module: {
    rules: [ {
      test: /\.js$/,
      enforce: 'pre',
      include: resolve('src'),
      loader: 'eslint-loader'
    }, {
      test: /\.js$/,
      include: resolve('src'),
      loader: 'babel-loader',
    } ],
  },
  node: {
    setImmediate: false,
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}

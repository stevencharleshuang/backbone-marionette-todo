// This file's code from: https://marionette.gitbooks.io/marionette-guides/content/en/getting_started/installing_marionette.html
var webpack = require('webpack');

module.exports = {
  entry: './app/driver.js',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.html$/,
        loader: 'underscore-template-loader'
      }
    ]
  },
  output: {
    path: __dirname + '/static/js',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'underscore'
    })
  ],
  resolve: {
    modules: [__dirname + '/node_modules', __dirname + '/app']
  },
  resolveLoader: {
    modules: [__dirname + '/node_modules']
  }
};
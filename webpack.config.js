/* eslint-disable no-var */
var path = require('path');
var webpack = require('webpack');

module.exports = {

  devtool: 'eval-source-map',

  context: path.join(__dirname, 'src-ui'),
  entry: ['./app'],

  output: {
    path: path.join(__dirname, 'build-ui/js'),
    filename: 'app.js',
    publicPath: '/js'
  },
  module: {
    loaders: [
      {
        test: require.resolve('jsplumb'),
        loaders: ['imports-loader?this=>window', 'script-loader']
      }, {
        test: /\.js$/,
        loaders: ['babel-loader'],
        include: path.join(__dirname, 'src-ui')
      }
    ]
  }
};

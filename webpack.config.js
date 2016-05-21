var webpack = require('webpack');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.join(ROOT_PATH, '/app/');
var PUBLIC_PATH = path.join(ROOT_PATH, '/public/');
var BUILD_PATH = path.join(ROOT_PATH, '/public/static/js/');

module.exports = {
  entry: {
    paso1: ['webpack/hot/dev-server', './app/paso1.jsx']
  },
  output: {
    path: BUILD_PATH,
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

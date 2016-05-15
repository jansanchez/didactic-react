var webpack = require('webpack');
var path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.join(ROOT_PATH, '/app/');
var PUBLIC_PATH = path.join(ROOT_PATH, '/public/');
var BUILD_PATH = path.join(ROOT_PATH, '/public/static/js/');

module.exports = {
  entry: {
    paso1: [ path.join(APP_PATH, 'paso1.jsx') ]
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
        exclude: /(node_modules)/,
        loader: 'babel',
        include: APP_PATH,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    progress: true,
    noInfo: false,
    contentBase: PUBLIC_PATH
  },
  plugins: [
     new webpack.HotModuleReplacementPlugin()
  ]
};

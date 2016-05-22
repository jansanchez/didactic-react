var path = require('path');
var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.join(ROOT_PATH, '/public/static/js/');

module.exports = {
  entry: {
    tallerReact1: ['webpack/hot/dev-server', './app/TallerReact1']
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
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

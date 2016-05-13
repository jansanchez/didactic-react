module.exports = {
  entry: {
    paso1: ['./source/js/paso1.jsx']
  },
  output: {
    path: './public/static/js/',
    filename: '[name].js',
    chunkFilename: '[id].js'
  },
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};

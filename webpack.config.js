const webpack = require('webpack')

module.exports = {
  entry: './src/vue-hint.css.js',

  output: {
    path: '.',
    filename: 'index.js',
    library: 'VueHintCss',
    libraryTarget: 'umd'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },

  babel: {
    presets: ['es2015'],
    plugins: ['transform-object-assign']
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],
}
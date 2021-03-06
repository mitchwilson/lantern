var webpack = require('webpack');
var path = require('path');
var env = require('yargs').argv.mode;

var libraryName = 'lantern';

var plugins = [], outputFile = libraryName + '.js';

var config = {
  entry: __dirname + '/src/lantern.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/dist',
    filename: outputFile,
    library: 'Lantern',
    libraryTarget: 'umd',
    umdNamedDefine: false
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components|demo)/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    root: path.resolve('./src'),
    extensions: ['', '.js']
  },
  plugins: plugins
};

module.exports = config;

var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './example/app.jsx',
  output: { path: __dirname + '/example/', filename: 'bundle.js' },
  devServer: {
    contentBase: './example', // Relative directory for base of server
     compress: true,
    disableHostCheck: true   // That solved it
    // public: 'store-client-nestroia1.c9users.io'
  },
  plugins:[
    new CopyWebpackPlugin([
         { from: './example/static' }
     ])
  ],
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};

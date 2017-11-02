var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

const ENV = process.env.NODE_ENV = process.env.ENV = 'development';

module.exports = webpackMerge(commonConfig, {
	cache: true,
	debug: true,
  // devtool: 'source-map',

  output: {
  },

  plugins: [
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});

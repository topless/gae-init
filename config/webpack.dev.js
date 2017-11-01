var webpackMerge = require('webpack-merge');
var commonConfig = require('./webpack.common.js');

module.exports = webpackMerge(commonConfig, {
  // devtool: 'eval',
  output: {
  },

  plugins: [
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal'
  }
});

var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ManifestRevisionPlugin = require("manifest-revision-webpack-plugin");
var DashboardPlugin = require("webpack-dashboard/plugin");

var rootAssetPath = "./main/static/assets";

module.exports = {
  entry: {
    app_js: rootAssetPath + "/script/App.js",
    app_css: rootAssetPath + "/style/main.css",
    vendor_js: ["react", "react-dom", "react-bootstrap"]
  },
  output: {
    path: "./main/static/dist",
    publicPath: "http://localhost:2992/assets/",
    filename: "[name].[chunkhash].js",
    chunkFilename: "[id].[chunkhash].js"
  },
  resolve: {
    extensions: ["", ".js", ".css"]
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style-loader!css-loader?modules'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      },
      // {
      //   test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "url?limit=10000&mimetype=application/font-woff"
      // },
      // {
      //   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "url?limit=10000&mimetype=application/octet-stream"
      // },
      // {
      //   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "file"
      // },
      // {
      //   test: /\.(jpe?g|png|gif|svg([\?]?.*))$/i,
      //   loaders: [
      //     "file?context=" + rootAssetPath + "&name=[path][name].[hash].[ext]",
      //     "image?bypassOnDebug&optimizationLevel=7&interlaced=false"
      //   ]
      // }
    ]
  },
  plugins: [
    new DashboardPlugin(),
    new ExtractTextPlugin("[name].[chunkhash].css"),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor_js",
      filename: "[name].[chunkhash].js",
      minChunks: Infinity,
    }),
    new ManifestRevisionPlugin(path.join("main/static", "manifest.json"), {
      rootAssetPath: rootAssetPath,
      ignorePaths: ["/script", "/style"]
    })
  ]
};

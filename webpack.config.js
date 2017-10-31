var path = require("path");

var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var ManifestRevisionPlugin = require("manifest-revision-webpack-plugin");
var DashboardPlugin = require("webpack-dashboard/plugin");

var rootAssetPath = "./main/static/assets";

module.exports = {
  entry: {
    app_js: [rootAssetPath + "/script/App.js"],
    app_css: [rootAssetPath + "/style/main.css"]
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
      { test: /\.jsx$/, loader: "babel-loader", exclude: /node_modules/ },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style-loader!css-loader?modules'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
        // loader: ExtractTextPlugin.extract("style-loader", "css-loader"),
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: "url?limit=10000&mimetype=application/octet-stream"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: "file"
      },
      {
        test: /\.(jpe?g|png|gif|svg([\?]?.*))$/i,
        loaders: [
          "file?context=" + rootAssetPath + "&name=[path][name].[hash].[ext]",
          "image?bypassOnDebug&optimizationLevel=7&interlaced=false"
        ]
      }
    ]
  },
  // externals: {
  //   'react': 'React',
  //   'react-dom': 'ReactDOM',
  //   'react-bootstrap': 'react-bootstrap',
  //   'bootstrap': 'bootstrap'
  // },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.UglifyJsPlugin(),
    new DashboardPlugin(),
    new ExtractTextPlugin("[name].[chunkhash].css"),
    new ManifestRevisionPlugin(path.join("main/static", "manifest.json"), {
      rootAssetPath: rootAssetPath,
      ignorePaths: ["/style", "/script"]
    })
  ]
};

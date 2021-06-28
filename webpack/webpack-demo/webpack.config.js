const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  // mode: "development",
  mode: "production",
  entry: {
    app: "./src/index.js",
    module: "./src/module/module.js",
    anothermodule: "./src/module/anothermodule.js",
    lazyload: "./src/lazy/index.js",
    // print: './src/print.js',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "OutPut",
    }),
    // new CleanWebpackPlugin(["dist"]),
    new CleanWebpackPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({ // webpack 4已废除
    //   name: "common",
    // }),
  ],
  optimization: {
    // webpack 4代码分离
    splitChunks: {
      chunks: "all",
      name: "common",
    },
  },
};

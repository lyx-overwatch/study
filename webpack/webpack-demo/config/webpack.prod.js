const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const UglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");

module.exports = merge(common, {
  devtool: "source-map",
  plugins: [
    new UglifyjsWebpackPlugin({
      sourceMap: true,
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      // webpack 声明了一个全局变量process.env.NODE_ENV，前端代码可以获取到这个变量;node环境下的process.env.NODE_ENV，只能在node脚本环境中使用
    }),
  ],
});

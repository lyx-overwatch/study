const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const CleanWebpackPlugin = require("clean-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/index.js",
    // print: './src/print.js',
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve("./", "dist"),
    // path: path.resolve(__dirname, "dist"),
    /* __dirname 获取当前文件执行的绝对路径 , ./ 获取node执行时的工作路径 
        console.log("__dirname", path.resolve(__dirname));
        console.log("./", path.resolve("./"));
    */
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
    // new CleanWebpackPlugin(["dist"]), // 低版本用法
    new CleanWebpackPlugin(),
  ],
  performance: {
    hints: false,
    maxAssetSize: 100000,
  },
};

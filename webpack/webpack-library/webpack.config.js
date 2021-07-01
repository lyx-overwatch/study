const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "webpack-numbers.js",
    library: "webpackNumbers", // 让library能在各种环境中使用
    libraryTarget: "umd", // library暴露给外部使用的方式,详细可以看output配置文档
  },
  externals: {
    // 外部化lodash依赖,把 lodash 当作 peerDependency,在用户使用该library的时候，应该已经安装了lodash
    lodash: {
      commonjs: "lodash",
      commonjs2: "lodash",
      amd: "lodash",
      root: "_",
    },
  },
};

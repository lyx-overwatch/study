const webpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config");
const webpack = require("webpack");
const chalk = require("chalk");

const log = console.log;

const options = {
  contentBase: "./dist",
  hot: true,
};

// 启用热更新
webpackDevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(3030, "localhost", () => {
  log(chalk.cyan("server is listening in port 3030"));
});

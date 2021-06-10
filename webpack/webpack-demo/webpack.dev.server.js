const webpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');
const webpack = require('webpack');

const options = {
  contentBase: './dist',
  hot: true,
}

// 启用热更新
webpackDevServer.addDevServerEntrypoints(config, options);

const compiler = webpack(config);
const server = new webpackDevServer(compiler,options);

server.listen(8000,'localhost',() => {
  console.log('server is listening in port 8000')
})
/*
 .eslintrc.js 项目默认eslint配置，在修改某些rule可能不会立马生效时，改动下vscode的eslint配置，再重新打开编辑器
*/

module.exports = {
  rules: {
    "linebreak-style": [0, "error", "windows"], // 解决windows机器LF 和 CRLF换行的问题
    "no-undef": "off", // 关闭全局声明的检查，在ts中全局声明的某些变量可能被eslint检测出没有声明
  },
};

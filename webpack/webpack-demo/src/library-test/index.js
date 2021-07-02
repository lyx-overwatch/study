/* 
组件发布使用流程: 
1.webpack 打包时设置libraryTarget: 'umd'，打包后的函数可以通过commonjs require方式引入
2.package.json 设置main属性，这是引入该npm包的入口文件; 设置module属性使得该包可以通过es module方式引入(详细见webpack-library 下的package.json);
3.通过npm publish 发布组件，安装依赖后使用

 */

// commonjs规范下的使用方式
// const webpackNumbers = require("webpack-library-lyx");
// export const toWord = function (n) {
//   console.log(webpackNumbers.numToWord(n));
// };

// es module引入方式
import { numToWord } from "webpack-library-lyx";

export const toWord = function (n) {
  console.log(numToWord(n));
};

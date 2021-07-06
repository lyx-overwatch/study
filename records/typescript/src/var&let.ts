/* 
  var 定义的变量，可以在包含它的函数，模块，命名空间或全局作用域内部任何位置被访问
*/
function f(params:boolean) {
  if(params) {
    var x = 10;
  }
  return x;
}
f(true); // return 10;
f(false); // return 'undefined';


/*
  以下函数执行会在若干秒后，并且是在for循环结束后，打印出 10 个 10;
  setTimeout的每一个函数表达式实际上都引用了相同作用域里的同一个i.for循环结束后，i的值变成10。
*/
for (var i = 0; i < 10; i++) {
  setTimeout(function () { console.log(i); }, 100 * i);
}

// 通常的解决办法，使用立即执行函数
for (var i = 0; i < 10; i++) {
  (function (i) {
    setTimeout(function () { console.log(i); }, 100 * i);
  })(i);
}

// let声明的变量属于块作用域
for (let i = 0; i < 10; i++) {
  setTimeout(function () { console.log(i); }, 100 * i);
}

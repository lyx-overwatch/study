 // 交叉类型
 function extend<T extends object, U extends object>(first: T, second:U) : T & U {
   const result = <T & U>{};
   for (let id in first) {
    //  (<T>result)[id] = first[id]; // (<T>result) 类型断言写法
     (result as T)[id] = first[id]; // result as T 类型断言写法
   }
   for (let id in second) {
     if(!result.hasOwnProperty(id)) {
       (<U>result)[id] = second[id];
     }
   }
   return result
 }

 const x = extend({a: 'hello'}, {b: 'world'});

 console.log(x.a, x.b);
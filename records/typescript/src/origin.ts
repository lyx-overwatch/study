/*
 ts 高级类型的原始声明
*/


// 混入,即联合类型，包含两个类型的所有属性

type _Mixin<T, U> = {
  // keyof T， 索引类型查询操作符; T[P],索引访问操作符
  [P in keyof (T & U)]: (T & U)[P]
}

type l1 = {
  a: string
}

type l2 = {
  b: string
}

/*
 mixin = {
   a: string
   b: string
 }
*/
type mixin = _Mixin<l1, l2>


// 所有属性可选

type _Partial<T> = {
  [P in keyof T]?: T[P]
}

type p1 = {
  a: string
}

/*
 partial = {
   a?: string
 }
*/
type partial = _Partial<p1>

// 所与属性必填

type _Required<T> = {
  [P in keyof T]-?: T[P] 
};

// 所有属性只读

type _Readonly<T> = {
  readonly [P in keyof T]: T[P];
}

type r1 = {
  a: string;
}

type readonly = _Readonly<r1>

// 从 T 中取出一系列 K 的属性

type _Pick<T, K extends keyof T> = {
  [P in K]: T[P];
}

type p2 = {
  a: string
  b: string
}

type _p2 = 'a'

/*
 pick = {
   a: string
 }
*/
type pick = _Pick<p2, _p2>


// 将 K 中所有的属性的值转化为 T 类型
type _Record<K extends keyof any, T> = {
  [P in K]: T;
}

type r2 = {
  a: string
  b: string
}

/*
keyof r2 与 'a' | 'b' 等价
 record = {
   a: number
   b: number
 }
*/
type record = _Record<keyof r2, number>

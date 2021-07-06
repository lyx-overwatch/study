// 扁平化数组
let getOneDimensionalArray = arr => {
  return arr.reduce((pre, cur) => {
    return Array.isArray(cur)
      ? cur.every(item => !Array.isArray(item))
        ? pre.concat(cur)
        : pre.concat(getOneDimensionalArray(cur))
      : pre.concat(cur)
  }, [])
}

console.log(getOneDimensionalArray([[1, 2, 3, [4, [3, [2]]]], [2], [3]]));

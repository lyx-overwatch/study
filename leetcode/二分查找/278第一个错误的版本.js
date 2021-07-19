/**
假设你有 n 个版本 [1, 2, ..., n]，你想找出导致之后所有版本出错的第一个错误的版本。

你可以通过调用 bool isBadVersion(version) 接口来判断版本号 version 是否在单元测试中出错。实现一个函数来查找第一个错误的版本。你应该尽量减少对调用 API 的次数。


示例 1：

输入：n = 5, bad = 4
输出：4
解释：
调用 isBadVersion(3) -> false
调用 isBadVersion(5) -> true
调用 isBadVersion(4) -> true
所以，4 是第一个错误的版本。
 */

var solution = function (isBadVersion) {

  return function (n) {
    if (n === 1) return 1;
    let left = 1;
    let right = n;
    let index = n;

    while (!(isBadVersion(index) && !isBadVersion(index - 1))) {
      if (isBadVersion(index)) {
        right = index
        index = Math.floor(left + (right - left) / 2);
      } else {
        left = index;
        index = Math.floor(left + (right - left) / 2);
      }
    }

    return index;
  };
};
/**
给定一个已按照 升序排列  的整数数组 numbers ，请你从数组中找出两个数满足相加之和等于目标数 target 。
函数应该以长度为 2 的整数数组的形式返回这两个数的下标值。numbers 的下标 从 1 开始计数 ，所以答案数组应当满足 1 <= answer[0] < answer[1] <= numbers.length 。

你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

 
示例 1：

输入：numbers = [2,7,11,15], target = 9
输出：[1,2]
解释：2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2
 */
var twoSum = function (numbers, target) {
  const res = [];
  const len = numbers.length;
  let low = 0;

  while (low <= len - 2) {
    res.push(low + 1);
    let left = low + 1;
    let right = len - 1;
    let mid = 0;

    while (left <= right) {
      mid = (left + right) >> 1;
      if (numbers[low] + numbers[mid] === target) {
        res.push(mid + 1);
        return res;
      } else if (numbers[low] + numbers[mid] > target) {
        right = mid - 1;
      } else if (numbers[low] + numbers[mid] < target) {
        left = mid + 1;
      }
    }

    res.pop();
    low++;
  }
  return res;
};

console.log(twoSum([2,7,11,15], 9));

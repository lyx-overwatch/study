/**
 给你一个按 非递减顺序 排序的整数数组 nums，返回 每个数字的平方 组成的新数组，要求也按 非递减顺序 排序。

  输入：nums = [-4,-1,0,3,10]
  输出：[0,1,9,16,100]
  解释：平方后，数组变为 [16,1,0,9,100]
  排序后，数组变为 [0,1,9,16,100]
 */

var sortedSquares = function (nums) {
  let nagetive = -1;
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0) {
      nagetive = i;
    }
  }

  const res = [];
  let index = 0;
  let left = nagetive;
  let right = nagetive + 1;

  while (left >= 0 || right < len) {
    if (left < 0) {
      res[index] = nums[right] * nums[right]
      right++;
    } else if (right >= len) {
      res[index] = nums[left] * nums[left]
      left--;
    } else {
      const rightSquare = nums[right] * nums[right];
      const leftSquare = nums[left] * nums[left];
      if (rightSquare > leftSquare) {
        res[index] = leftSquare;
        left--;
      } else {
        res[index] = rightSquare;
        right++;
      }
    }
    index++;
  }
  return res;
};
/*
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
*/

const reverse = (nums, low, high) => {
  while (low < high) {
    [nums[low++], nums[high--]] = [nums[high], nums[low]]
  }
}

const rotate = function (nums, k) {
  const len = nums.length;
  k %= len;
  reverse(nums, 0, len - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, len - 1);
  return nums;
};
/**
 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

输入: nums = [1,3,5,6], target = 2
输出: 1

 */

function searchInsert(nums, target) {
  const len = nums.length;
  let left = 0;
  let right = len - 1;
  let mid = 0;

  while (left < right) {
    mid = (left + right) >> 1;
    if (nums[mid] === target) return mid;
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return target > nums[left] ? left + 1 : left;
};
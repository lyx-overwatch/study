/** 
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

示例:
输入: [0,1,0,3,12]
输出: [1,3,12,0,0]

使用快慢指针解题
*/

var moveZeroes = function (nums) {
  const end = nums.length - 1;
  let slow = 0;
  let quick = 0;

  while (slow <= end) {
    if (quick <= end) {
      if (nums[quick] !== 0) {
        nums[slow] = nums[quick];
        slow++;
      }
      quick++;
    } else {
      nums[slow] = 0;
      slow++;
    }
  }

  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 5]));

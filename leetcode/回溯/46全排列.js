/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = [];
  if (nums.length === 1) {
    return [nums];
  }
  const getRes = (index, arr, filter) => {
    if (arr.length === filter.length) {
      return;
    }
    if (!arr.length) arr.push(filter[index]);
    if (filter[index] !== "") filter[index] = "";
    for (let i = 0; i < filter.length; i++) {
      if (filter[i] !== "") {
        var curArr = [].concat(arr);
        var temp = filter[i];
        arr.push(temp);
        if (arr.length === filter.length) {
          res.push(arr);
          break;
        }
        filter[i] = "";
        getRes(index, arr, filter);
        arr = curArr;
        filter[i] = temp;
      }
    }
  };
  nums.forEach((_, index) => {
    getRes(index, [], [].concat(nums));
  });
  console.log(res);
  return res;
};

permute([0, 1]);

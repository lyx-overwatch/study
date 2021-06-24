/**
 * 给你一个数组 points ，其中 points[i] = [xi, yi] 表示 X-Y 平面上的一个点。求最多有多少个点在同一条直线上。
 * 
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function (points) {
  var max = 0;
  for (let i = 0; i < points.length; i++) {
    var obj = {};
    for (let j = 0; j < points.length; j++) {
      if (i !== j) {
        var key;
        var _x = points[i][0] - points[j][0];
        var _y = points[i][1] - points[j][1];
        if (_x === 0) {
          key = '0'
          if (obj[key]) {
            var value = obj[key];
            value++;
            obj[key] = value;
          } else {
            obj[key] = 1;
          }
        } else if (_y === 0) {
          key = 'Max'
          if (obj[key]) {
            var value = obj[key];
            value++;
            obj[key] = value;
          } else {
            obj[key] = 1;
          }
        } else {
          key = `${_x}|${_y}`;
          var keys = Object.keys(obj);
          if(!keys.length) {
            obj[key] = 1;
          } else {
            keys.forEach(k => {
              if (k !== '0' && k !== 'Max') {
                var k_x = k.split('|')[0];
                var k_y = k.split('|')[1];
                if (k_x * _y === k_y * _x) {
                  var value = obj[k];
                  value++;
                  obj[k] = value;
                } else {
                  obj[key] = 1;
                }
              }
            })
          }
        }
      }
    }

    var maxLen = sort(obj);

    max = maxLen > max ? maxLen : max;
  }
  return max;
}

var sort = function (obj) {
  var len = 0;
  var keys = Object.keys(obj);
  keys.forEach(key => {
    var value = obj[key];
    len = value > len ? value : len;
  })
  return len + 1;
}

maxPoints([[1,1],[2,2],[3,3]]);

// 使用map数据结构
var setKey = function (pointi, pointj) {
  let denominator = pointj[0] - pointi[0];
  if (!denominator) return Number.POSITIVE_INFINITY;
  return (pointj[1] - pointi[1]) / denominator;
}

function mapMaxPoints(points) {
  let len = points.length;
  if (len < 3) return len;
  let max = 0;
  for (let i = 0; i < len; i++) {
    let map = new Map();
    for (let j = i + 1; j < len; j++) {
      let k = setKey(points[i], points[j]);
      count = 1;
      if (map.has(k)) count = map.get(k) + 1;
      map.set(k, count);
      max = Math.max(max, count);
    }
  }
  return max + 1;
}
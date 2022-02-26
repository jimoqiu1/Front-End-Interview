var findNumberIn2DArray = function (matrix, target) {
  let rows = matrix.length
  if (rows === 0) return false
  let cols = matrix[0].length
  if (cols === 0) return false
  let colIndex = binarySearch1(matrix, cols, target)
  console.log(colIndex)
  if (colIndex < 0) return false
  return binarySearch2(matrix, colIndex, rows, target)
};

var binarySearch1 = function (nums, len, target) {
  let left = -1,
    right = len - 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[0][mid] <= target) {
      left = mid
    } else if (nums[0][mid] > target) {
      right = mid - 1
    }
  }
  return left
}
var binarySearch2 = function (nums, colIndex, len, target) {
  let left = 0,
    right = len - 1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid][colIndex] === target) return true
    if (nums[mid][colIndex] < target) left = mid + 1
    else if (nums[mid][colIndex] > target) right = mid - 1
  }
  return false
}

let ret = findNumberIn2DArray([
[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
], 20)
console.log(ret);

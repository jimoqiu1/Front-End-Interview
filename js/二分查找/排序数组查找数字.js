var search = function(nums, target) {
  let len = nums.length
  if(len === 0) return 0
  let leftPos = binarySearchLeft(nums, len, target)
  let rightPos = binarySearchRight(nums, len, target)
  if(leftPos !== -1 && rightPos!==-1) {
    return rightPos - leftPos + 1
  } else return 0
}

function binarySearchLeft(nums, len, target) {
  let left = 0, right = len - 1
  while(left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if(nums[mid] >= target) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return nums[left] === target ? left : -1
}

function binarySearchRight(nums, len, target) {
  let left = 0, right = len - 1
  while(left < right) {
    let mid = left + Math.floor((right - left) / 2) + 1
    if(nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid
    }
  }
  return nums[right] === target ? right : -1
}

let arr = [2,4,4,4,4,5,6,8,8]
let res = binarySearchLeft(arr, arr.length, 9)
let res2 = binarySearchRight(arr, arr.length, 1)
let res3 = search(arr, 4)
// console.log(res);
// console.log(res2);
console.log(res3);

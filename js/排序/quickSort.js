// 写法1
//  function quickSort(nums) {
//   let len = nums.length
//   if(nums.length <= 1) return nums
//   let pivot = Math.floor(nums.length / 2)
//   let pivotVal = nums.splice(pivot, 1)[0]
//   let left = []
//   let right = []
//   for(let i = 0; i < nums.length; i++) {    // 一个疑惑：这里为什么不能写len？，写len会出现栈溢出错误
//     if(nums[i] < pivotVal)  {
//       left.push(nums[i])
//     }
//     else {
//       right.push(nums[i])
//     } 
//   }
//   return quickSort(left).concat([pivotVal], quickSort(right))
// }

// 写法2
/**
 * 平均时间O(logn)
 * 空间
 */
function quickSort(nums) {
  let len = nums.length
  if(len <= 1) return nums
  return sort(nums, 0, len -1)
}

function sort(nums, left, right) {
  let low = left, high = right
  let pivotPos = Math.floor(Math.random(high - low + 1)) + left
  let pivot = nums[pivotPos]
  let temp = nums[right]
  nums[right] = pivot
  nums[pivotPos] = temp
  while(low < high) {
    if(low < high && nums[low] < pivot) low++
    nums[high] = nums[low]
    if(low < high && nums[high] >= pivot) high--
    nums[low] = nums[high]
  }
  nums[low] = pivot
  if(low > left) sort(nums, left, low - 1)
  if(high < right)sort(nums, low + 1, right)
  return nums
}

let res = quickSort([3, 6, 5, 4, 1, 4, 7, 8, 9])
console.log(res);
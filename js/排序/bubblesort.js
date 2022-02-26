/**
 * 稳定
 * 最坏时间O(n2), 平均O(n2)
 * 空间O(logn)
 */

function bubbleSort(nums) {
  let len = nums.length
  if(len === 0) return nums
  for(let i = 0; i < len; i++) {
    for(let j = 0; j < len - i - 1; j++) {
      if(nums[j] > nums[j + 1]) {
        let temp = nums[j]
        nums[j] = nums[j+1]
        nums[j+1] = temp
      }
    }
  }
  console.log(nums);
}

bubbleSort([3,5,2,1,6,4,3,6])
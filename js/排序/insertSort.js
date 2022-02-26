function insertSort(nums) {
  let len = nums.length
  for(let i = 1; i < len; i++) {
    if(nums[i] < nums[i-1]) {
      let val = nums[i]
      let j = i - 1
      while(j >= 0 && val < nums[j]) {
        nums[j+1] = nums[j]
        j--
      }
      nums[j+1] = val
    }
  }
}

let arr = [3,6,5,2,7,8,4,2]
insertSort(arr)
console.log(arr)
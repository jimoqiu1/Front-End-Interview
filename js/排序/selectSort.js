function selectSort(nums) {
  let len = nums.length
  let minIndex
  for(let i = 0; i <len; i++) {
    minIndex = i
    for(let j = i; j < len; j++) {
      if(nums[j] < nums[minIndex]) {
        minIndex = j
      }
    }
    let temp = nums[i]
    nums[i] = nums[minIndex]
    nums[minIndex] = temp
  }
}

let arr = [3,6,5,2,7,8,4,2]
selectSort(arr)
console.log(arr)
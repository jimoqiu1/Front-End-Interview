function mergeSort(nums) {
  // let len = nums.length
  if(nums.length < 2) return nums
  let mid = Math.floor(nums.length / 2)
  let leftArr = nums.slice(0, mid)
  let rightArr = nums.slice(mid)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
  let result = []
  while(leftArr.length && rightArr.length) {
    if(leftArr[0] <= rightArr[0]) {
      result.push(leftArr.shift())
    } else {
      result.push(rightArr.shift())
    }
  }
  while(leftArr.length) result.push(leftArr.shift())
  while(rightArr.length) result.push(rightArr.shift())
  return result
}

let arr = [3,6,5,2,7,8,4,2]
let res = mergeSort(arr)
console.log(res)
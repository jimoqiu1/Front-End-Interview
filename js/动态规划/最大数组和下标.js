var maxSubArray = function(nums) {
  let len = nums.length
  if(len === 0) return 0
  let pre = 0, maxAns = nums[0], start = 0, end = 0
  let resBegin = start, resEnd = end
  for(let i = 0; i < len; i++) {
    if(nums[i] + pre > nums[i]) {
      pre = nums[i] + pre
      end = i
    } else {
      start = i
      end = i
      pre = nums[i]
    }
    if(pre > maxAns) {
      resBegin = start
      resEnd = end
      maxAns = pre
    }
  }
  return [maxAns,resBegin, resEnd]
};

let res = maxSubArray([5,4,-1,7,8])
console.log(res);
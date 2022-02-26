let a = [1, [2, 3, [4, 5]]]

// 利用reduce，判断遍历的每一项是不是数组，如果是就递归
// function flatten(arr) {
//   return arr.reduce((result, item) => {
//     return result.concat(Array.isArray(item) ? flatten(item) : item)
//   }, [])
// }

// 利用map递归
function flatten(arr) {
  let res = []
  arr.map(item => {
    if(Array.isArray(item)) {
      res = res.concat(flatten(item))
    } else {
      res.push(item)
    }
  })
  return res
}

// toString()可以将数组转成字符串
// function flatten(arr) {
//   console.log(arr.toString());   // 1,2,3,4,5
//   return arr.toString().split(',').map(function(item) {
//     return Number(item)
//   })
// }

// join()可以将数组转成字符串
// function flatten(arr) {
//   console.log(arr.join(',')); // 1,2,3,4,5
//   return arr.join(',').split(',').map(function(item) {
//       return parseInt(item);
//   })
// }

// 扩展运算符能对数组降一维
// function flatten(arr) {
//   while(arr.some(item=>Array.isArray(item))) {
//     arr = [].concat(...arr)
//   }
//   return arr
// }

let res = flatten(a)
console.log(res);

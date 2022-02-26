let res = ["1", "2", "3"].map(parseInt)

console.log(res)   // [1, NaN, NaN]

// 原因：map会传入三个参数：element、index、array（忽略），所以传入的参数是1-0,2-1，3-2,所以后面两个会报错

function test(ele, index, array) {
  console.log(ele + '_' + index + '_' + array)
}

['1', '2', '3'].map(test)

// console.log(parseInt('2', '1'));
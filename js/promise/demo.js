// const MyPromise = require('./MyPromise3')

// let promise1 = new MyPromise((resolve, reject) => {   // excutor
//   resolve('success1')
//   // reject('error')
// })
// let promise2 = promise1.then((res) => {
//   return new MyPromise((resolve, reject) => {
//     resolve('hhshshshs')
//   })
// }, (reason) => {
//   return reason
// })
// // console.log(promise2);

// promise2.then().then((value) => {
//   throw new Error('error')
// }, (reason) => {
//   console.log(reason);
// }).catch(err => {
//   console.log(err);
// })

// 1秒后输出 ”成功“
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject('失败')
  }, 1000)
}).then(res => console.log('value', res), err => console.log('reason', err))

let promise = new Promise((resolve, reject) => {   // excutor
  resolve('success1')
  // return 'success1'
  // reject('failed1')
  // throw new Error('failed')
  // setTimeout(() => {
  //   resolve('success')
  // }, 2000)
})

// 1、通过return 传递结果
// promise.then((res) => {
//   return res    // 普通值
// })
// .then((res) => {
//   console.log(res);
// })

//2、通过新的promise resolve 结果
// promise.then((res) => {
//   return res
// })
// .then((res) => {
//   return new Promise((resolve, reject) => {
//     // resolve(res)
//     setTimeout(() => {
//       resolve(res)
//     }, 2000)
//   })
// })
// .then((res) => {
//   console.log(res);
// })

// 3、通过新的promise reject 原因，再下一次then的时候，走的是成功的回调回调函数，而不是走失败的
// promise.then((res) => {
//   return res
// })
// .then((res) => {
//   return new Promise((resolve, reject) => {
//     // resolve(res)
//     setTimeout(() => {
//       reject('Error')
//     }, 2000)
//   })
// })
// .then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log('rejected: ' + err);   // rejected: Error
//   // 默认return undefined
// })
// .then((res) => {
//   console.log('fulfilled: ' + res);   // fulfilled: undefined
// }, (err) => {
//   console.log(err);
// })

//4、 throw error 
// promise.then((res) => {
//   return res
// })
// .then((res) => {
//   return new Promise((resolve, reject) => {
//     // resolve(res)
//     setTimeout(() => {
//       reject('Error')
//     }, 2000)
//   })
// })
// .then((res) => {
//   console.log(res);
// }, (err) => {
//   console.log('rejected: ' + err);   // rejected: Error
//   // 默认return undefined
// })
// .then((res) => {
//   throw new Error('Throw Error')
// }, (err) => {
//   console.log(err);
// })
// .then((res) => {
//   console.log('fulfilled: ' + res);
// }, (err) => {
//   console.log('excption: ' + err);    // excption: Error: Throw Error
// })

//5、 catch在Promise 源码层面就是一个then，Catch遵循then的运行原则
promise.then((res) => {
  return res
})
.then((res) => {
  return new Promise((resolve, reject) => {
    // resolve(res)
    setTimeout(() => {
      reject('Error')
    }, 2000)
  })
})
.then((res) => {
  console.log(res);
}, (err) => {
  console.log('rejected: ' + err);   // rejected: Error
  // 默认return undefined
})
.then((res) => {
  throw new Error('Throw Error')
}, (err) => {
  console.log(err);
})
.then((res) => {
  console.log('fulfilled: ' + res);
}).catch(err => {
  console.log('catch: ' + err);   // catch: Error: Throw Error
  return 'catch err'
}).then((res) => {
  console.log(res);   // catch err
})

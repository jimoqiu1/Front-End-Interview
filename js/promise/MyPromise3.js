const PENDING = 'PENDING',
  FULFILLED = 'FULFILLED',
  REJECTED = 'REJECTED'

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  let called = false // 标记resolve或者reject是否被调用
  if ((typeof x === 'object' && x !== null) || typeof x === 'function') {
    try { // if throw an error
      let then = x.then
      if (typeof then === 'function') { // Promise
        then.call(x, (y) => { // 调用then函数，将this指向x
          if (called) return
          called = true
          // resolve(y)
          resolvePromise(promise2, y, resolve, reject)
        }, (r) => {
          if (called) return
          called = true
          reject(r)
        })
      } else {
        resolve(x)
      }
    } catch (e) {
      if (called) return
      called = true
      reject(e)
    }
  } else {
    resolve(x)
  }
}

class MyPromise {
  constructor(executor) {
    this.status = PENDING
    this.value - undefined
    this.reason = undefined

    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if (this.status === PENDING) {
        this.status = FULFILLED
        this.value = value

        // 发布
        this.onFulfilledCallbacks.forEach(fn => fn())
      }
    }
    const reject = (reason) => {
      if (this.status === PENDING) {
        this.status = REJECTED
        this.reason = reason

        // 发布
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      executor(resolve, reject)
    } catch (e) {
      reject(e)
    }
  }
  // x 可能是普通值 也可能是promise
  then(onFulfilled, onRejected) {
    // onFulfilled, onRejected是可选参数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {
      throw reason
    }
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.status === FULFILLED) {
        setTimeout(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject) // 拿不到promise2的值怎么办》》》》加一个宏任务setTimeout延迟即可
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
      if (this.status === REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        }, 0)
      }
      if (this.status === PENDING) {
        // 当状态是PENDING的时候(executor执行函数中有异步操作时会出现pending状态)，收集所有的resolve和reject函数，订阅
        this.onFulfilledCallbacks.push(() => {
          try {
            let x = onFulfilled(this.value)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
        this.onRejectedCallbacks.push(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
    })
    return promise2
  }
  catch (errorCallback) {
    return this.then(null, errorCallback)
  }
}

module.exports = MyPromise
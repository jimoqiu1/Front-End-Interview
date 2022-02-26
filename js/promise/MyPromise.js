const PENDING = 'PENDING',
FULFILLED = 'FULFILLED',
REJECTED = 'REJECTED'


class MyPromise {
  constructor(executor) {
    this.status = PENDING
    this.value - undefined
    this.reason = undefined

    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    const resolve = (value) => {
      if(this.status === PENDING){
        this.status = FULFILLED
        this.value = value
        // 发布
        this.onFulfilledCallbacks.forEach(fn => fn())
      }
    }
    const reject = (reason) => {
      if(this.status === PENDING){
        this.status = REJECTED
        this.reason = reason

        // 发布
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      executor(resolve, reject)
    } catch(e) {
      reject(e)
    }
  }
  then(onFulfilled, onRejected) {
    if(this.status === FULFILLED) {
      onFulfilled(this.value)
    } 
    if(this.status === REJECTED) {
      onRejected(this.reason)
    }
    if(this.status === PENDING) {
      // 当状态是PENDING的时候(executor执行函数中有异步操作时会出现pending状态)，收集所有的resolve和reject函数，订阅
      this.onFulfilledCallbacks.push(() => {
        onFulfilled(this.value)
      })
      this.onRejectedCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
  } 
}
module.exports = MyPromise

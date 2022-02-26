class MyPromise {
  constructor(executor) {
    // 初始化值
    this.PromiseResult = null
    this.PromiseState = 'pending'

    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []

    // 初始化this指向
    const resolve = (value) => {
      if(this.PromiseState === 'pending') {
        this.PromiseState = 'fulfilled'
        this.PromiseResult = value

        this.onFulfilledCallbacks.forEach(fn => fn())
      }
    }

    const reject = (reason) => {
      if(this.PromiseState === 'pending') {
        this.PromiseState = 'rejected'
        this.PromiseResult = reason
        
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    // 执行传进来的函数，捕获错误
    try {
      executor(resolve, reject)
    } catch(err) {
      reject(err)
    }
  }

  // then(onFulfilled, onRejected) {
  //   // 参数校验，确保是函数，是普通值得转成函数
  //   onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
  //   onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}
  //   if(this.PromiseState === 'fulfilled') {
  //     onFulfilled(this.PromiseResult)
  //   }
  //   if(this.PromiseState === 'rejected') {
  //     onRejected(this.PromiseResult)
  //   }
  //   if(this.PromiseState === 'pending') {
  //     // 将函数保存起来，订阅
  //     this.onFulfilledCallbacks.push(() => {
  //       onFulfilled(this.PromiseResult)
  //     })
  //     this.onRejectedCallbacks.push(() => {
  //       onRejected(this.PromiseResult)
  //     })
  //   }
  // }

  // 链式调用
  then(onFulfilled, onRejected) {
    // 参数校验，确保是函数，是普通值得转成函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : val => val
    onRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}
    let thenPromise = new MyPromise((resolve, reject) => {
      const resolvePromise = cb => {
        setTimeout(() => {
          try {
            const x = cb(this.PromiseResult)   // 拿到then的返回值，可能是普通值，也可能是Promise对象
            if(x === thenPromise) {
              throw new Error('Chaining cycle detected for promise #<Promise>')
            }
            if(x instanceof MyPromise) {   // 说明x是一个Promise对象
              x.then(resolve, reject)
            } else {
              resolve(x)
            }
          } catch(err) {
            reject(err)
            throw new Error(err)
          }
        }, 0)
      }
      if(this.PromiseState === 'fulfilled') {
        resolvePromise(onFulfilled)
      }
      if(this.PromiseState === 'rejected') {
        resolvePromise(onRejected)
      }
      if(this.PromiseState === 'pending') {
        // 将函数保存起来，订阅
        this.onFulfilledCallbacks.push(() => {
          onFulfilled(this.PromiseResult)
        })
        this.onRejectedCallbacks.push(() => {
          onRejected(this.PromiseResult)
        })
      }
    })
    return thenPromise
  }

  catch (errorCallback) {
    return this.then(null, errorCallback)
  }

  static all(promises) {
    const result = []
    let count = 0
    return new MyPromise((resolve, reject) => {
      const addData = (index, value) => {
        result[index] = value
        count++
        if(count === promises.length) resolve(result)
      }
      promises.forEach((promise, index) => {
        if(promise instanceof MyPromise) {
          promise.then(res => {
            addData(index, res)
          }, err => reject(err))
        } else {
          addData(index, promise)
        }
      })
    })
  }

  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        if(promise instanceof MyPromise) {
          promise.then(res => {
            resolve(res)
          }, err => {
            reject(err)
          })
        } else {
          resolve(promise)
        }
      })
    })
  }
}

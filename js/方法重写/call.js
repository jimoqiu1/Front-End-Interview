

// Function.prototype.myCall = function(ctx) {
//   if(typeof this !== 'function') {
//     return new Error('Type error')
//   }

//   ctx = ctx ? Object(ctx) : window

//   // 获取参数
//   let args = [...arguments].splice(1), result = null
//   // this->test  =>  this->ctx
//   ctx.fn = this   // 这里的this 指的就是test函数
//   result = ctx.fn(...args)   // 函数执行时，this就指向了ctx

//   // 将属性删除
//   delete ctx.fn

//   return result
// }

Function.prototype.myCall = function(ctx) {
  if(typeof this !== 'function') {
    return new Error('Type error')
  }
  ctx = ctx ? Object(ctx) : window
  ctx.fn = this

  let args = [...arguments].splice(1), result = null
  result = ctx.fn(...args)
  delete ctx.fn

  return result
}

function test() {
  console.log(this)
  console.log(111)
}

test.myCall({a: 1, b: 2})

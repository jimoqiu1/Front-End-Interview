

Function.prototype.myApply = function(ctx) {
  if(typeof this !== 'function') {
    throw new Error('Type error')
  }

  ctx = ctx ? Object(ctx) : window

  ctx.fn = this   // 这里的this 指的就是test函数
  let result
  let args = Array.prototype.slice.call(arguments)
  if(!args[1]) {
    result = ctx.fn()
  } else {
    if(!(args[1] instanceof Array)) throw new Error('params must be array')
    result = ctx.fn(...args[1])
  }

  // 将属性删除
  delete ctx.fn

  return result
}

function test(a, b, c) {
  // console.log(this)
  console.log(a, b, c);
}

test.myApply({a: 1, b: 2}, [1,2,4])

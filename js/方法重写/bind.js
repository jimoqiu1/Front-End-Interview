/**
 * 
 * bind 的一些特点：
 * 1、返回的是一个函数
 * 2、this指向改变
 * 3、bind可以接收一部分参数，另一部分在返回的新函数中接收
 * 4、bind和call传递的参数是一样的
 * 5、实例化返回的新函数，this指向的test构造出来的实例
 * 6、实例应该继承test构造函数上的原型属性
 */

Function.prototype.myBind = function(context) {
  if(typeof this !== 'function') throw new TypeError('what is trying to be bound is not callback')
  var _self = this

  // 获取参数
  var args = Array.prototype.slice.call(arguments, 1)

  function Fn() {
    // 参数进行拼接
    var bindArgs = Array.prototype.slice.call(arguments)
    // 返回函数的执行结果
    // 判断函数是作为构造函数还是普通函数
    // 构造函数this instanceof fNOP返回true，将绑定函数的this指向该实例，可以让实例获得来自绑定函数的值。
    // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
    return _self.apply(this instanceof Fn ? this : context, args.concat(bindArgs))
  }

  // 这一段是将test的原型附到Fn上，这样new出来的对象可以访问test的原型，为什么不直接赋值，原因是Fn与test的原型分离开，所以使用一个中间变量来分割。
  var _tempObj = function() {}
  _tempObj.prototype = this.prototype
  Fn.prototype = new _tempObj()
  return Fn
}

function test(a, b) {
  this.c = 'c'
  console.log(this);
  console.log(this.a);
}
test.prototype.myLove = 'china'
var foo = {
  a: 1,
  b: 2
}
var fun = test.bind(foo, [3,4,5])  
fun(1)  // 普通函数调用，this会改变指向
// new fun(2222) // new构造函数时，不能改变this指向


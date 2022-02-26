// console.log(window);

// 全局作用域下的this
// window 和this的关系

// console.log(window === this);
// var a = 1
// var b = function() {
//   return 'func'
// }

// console.log(window.a === a);

// globalThis.a = 'global -> a'
// // global.b = 'global ->b'
// var obj = {
//   a: 'obj -> a',
//   test: function() {
//     // console.log(this.a);
//     // console.log(window.a);
//     // console.log(self.a);
//     // console.log(frames.a);
//     console.log(globalThis.a);
//   }
// }
// console.log(globalThis);
// obj.test()

function test() {
  "use strict"
  return this
}

console.log(test());   // undefined
console.log(window.test());   // window
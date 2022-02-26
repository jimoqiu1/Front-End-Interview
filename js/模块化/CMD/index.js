seajs.use(['./moduleA.js', './moduleB.js'], function(moduleA, moduleB) {
  console.log(moduleA.a);
  console.log(moduleB.b);
})
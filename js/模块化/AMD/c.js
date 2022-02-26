define('moduleC', ['moduleA', 'moduleB'], function(moduleA, moduleB) {
  var c = moduleA.a * moduleB.b
  return {
    c: c
  }
})
define('moduleB', ['moduleA'], function(moduleA) {
  let b = 10 - moduleA.a
  return {
    b: b
  }
})
define(function(require, exports, module) {
  let moduleA = require('./moduleA')
  let b = 10 - moduleA.a
  return {
    b: b
  }
})
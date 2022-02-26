require.config({
  paths: {
    moduleA: './a',
    moduleB: './b',
    moduleC: './c'
  }
})
require(['moduleA', 'moduleB', 'moduleC'], function(moduleA, moduleB, moduleC) {
  console.log(moduleA.a);
  console.log(moduleB.b);
  console.log(moduleC.c);
})
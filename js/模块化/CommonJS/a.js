exports.a = 0

setTimeout(() => {
  console.log('来自export', ++exports.a);
}, 300)
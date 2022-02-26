function fn(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num)
    }, 1000)
  })
}

function* gen() {
  yield fn(1)
  yield fn(2)
  return 3
}

const g = gen()
// console.log(g.next());
// console.log(g.next());
// console.log(g.next());
const next1 = g.next()
next1.value.then(res1 => {
  console.log(res1);
})
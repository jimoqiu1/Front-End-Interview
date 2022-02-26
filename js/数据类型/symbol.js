let obj = {
  a: 1,
  b: 2
}

obj['d'] = 33

obj[Symbol('c')] = 'foo'

for(let key in obj) {
  console.log(key);      // a, b, d
}
let keys = Object.getOwnPropertySymbols(obj)
console.log(keys);  // a, b, d, Symbol(c)

console.log(Symbol('c') === Symbol('c'));   // false

console.log(Symbol.for('e') === Symbol.for('e'))  // true
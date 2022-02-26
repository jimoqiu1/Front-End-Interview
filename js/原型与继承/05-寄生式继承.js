function create(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function createAnother(original) {
  let clone = create(original)
  clone.sayHi = function() {
    console.log('hi');
  }
  return clone
}

let person = {
  name: 'wang',
  hobbies: ['run', 'dance']
}

let instance = createAnother(person)
instance.sayHi()
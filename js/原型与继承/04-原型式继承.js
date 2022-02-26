function create(o) {
  function F() {}
  F.prototype = o
  return new F()
}

let person = {
  name: 'wang',
  hobbies: ['run', 'dance']
}

let instance = create(person)
instance.hobbies.push('sing')
console.log(instance.name);

let instance2 = create(person)
// instance2.hobbies.push('jumping')
console.log(instance.hobbies);
console.log(instance.hobbies);
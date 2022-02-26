function SuperType(name) {
  this.name = name
  this.colors = ['red', 'black']
}

SuperType.prototype.getSuperValue = function() {
  console.log('hahha');
}
function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}

SubType.prototype = new SuperType()
SubType.prototype.sayAge = function() {
  console.log(this.age)
}

let instance = new SubType('wang', 26)
instance.colors.push('white')
instance.getSuperValue() // hahha
console.log(instance.colors);

let instance2 = new SubType('duan', 30)
console.log(instance2.colors);
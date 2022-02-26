function create(o) {
  function F() {}
  F.prototype = o
  return new F()
}

function inheritPrototype(subType, superType) {
  let prototype = create(superType.prototype)
  prototype.constrctor = subType
  subType.prototype = prototype
}

function SuperType(name) {
  this.name = name
  this.colors = ['red', 'black']
}

SuperType.prototype.sayName = function() {
  console.log(this.name)
}

function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}

inheritPrototype(SubType, SuperType)

SubType.prototype.sayAge = function() {
  console.log(this.age)
}

let instance = new SubType('wang', 23)
instance.sayName()   // wang
instance.sayAge()   // 23
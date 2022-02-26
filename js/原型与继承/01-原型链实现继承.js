
function SuperType() {
  this.property = ['red', 'pink']
}

SuperType.prototype.getSuperProperty = function() {
  return this.property
}

function SubType() {
  this.subProperty = false
}

SubType.prototype = new SuperType()
SubType.prototype.getSubValue = function() {
  return this.subProperty
}

let instance = new SubType()
instance.property.push('black')
console.log(instance.property);

let instance2 = new SubType()

console.log(instance2.property);
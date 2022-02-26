function SuperType(name) {
  this.name = name
  this.colors = ['red', 'black']
}

SuperType.prototype.getSuperValue = function() {
  return 'hahahah'
}
function SubType(name, age) {
  SuperType.call(this, name)
  this.age = age
}

let instance = new SubType('wang', 26)
instance.colors.push('white')
// instance.getSuperValue()  // 无法获取父类原型上定义的方法
console.log(instance.colors);

let instance2 = new SubType('duan', 30)
console.log(instance2.colors);
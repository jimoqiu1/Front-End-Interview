class Father {
  constructor() {
    this.age = 44
  }
  swim() {
    console.log('swiming');
  }
}

class Son extends Father {
  constructor() {
    // 调用Father上的constructor
    // 生成this绑定 -> Father this -> Son 的实例
    // this -> new Father() -> {age}
    super()    //调用super() 会调用父类构造函数，并将返回的实例赋值给this。
    this.hobby = 'eat'
  }
}
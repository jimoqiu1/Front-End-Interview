function myInterval(fn, delay) {
  let timer = {
    flag: true
  }
  function interval() {
    if(timer.flag) {
      fn()
      setTimeout(interval, delay)
    }
  }
  setTimeout(interval, delay)
  return timer
}

myInterval(() => {
  console.log('hahah');
}, 2000)
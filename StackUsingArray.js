    // array to hold our values
    var stack = [];
    // length of the array - could also track this with queue.length
    var length = 0;
  

  function push(value) {
   this.stack.push(value)
   //this.stack[this.length]=value
   this.length++
   console.log(this.stack)
  }

  function pop() {
    this.stack.pop()
    this.length--
    console.log(this.stack)
  }
  
  function peek() {
    const lastValIndex = this.length-1
    if(lastValIndex>=0){
      return this.stack[lastValIndex]
    }
    else return false
  }
  this.push(3)
  this.push(4)
  this.push(5)
  this.pop()
  console.log(this.peek())

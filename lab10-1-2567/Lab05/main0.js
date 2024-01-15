
class Stack {
    constructor() {
      this.items = [];
    }
  
    push(value) {
      this.items.push(value);
    }
  
    pop() {
      if (this.items.length === 0) {
        return null;
      }
      return this.items.pop();
    }
  }
  
  const stack = new Stack();
  
  stack.push(5);
  stack.push(10);
  stack.push(15);
  
  console.log(stack.pop()); 
  console.log(stack.pop()); 
  console.log(stack.pop()); 
  console.log(stack.pop()); 
  
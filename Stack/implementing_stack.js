// To implement stack

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element)
    {
      this.items.push(element); 
    }
  
    pop()
    {
      return this.items.pop(); 
    }
  
    peek()
    {
      return this.items[this.items.length - 1]; 
    }
  
    isEmpty()
    {
      return this.items.length === 0;
    }
  
    printStack() 
    {
      console.log(this.items.join(" -> ")); 
    }
  }

  
  
  const myStack = new Stack();
  myStack.push(10);
  myStack.push(20);
  myStack.printStack();
  console.log(myStack.pop()); 
  console.log(myStack.peek()); // peek return top element without removing it

  // output 10 -> 20
//20
//10

  
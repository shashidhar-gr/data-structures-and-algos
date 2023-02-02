class Stack {
  count = 0;
  storage = {};
  
  constructor() {
    
  }
  
  push(value) {
    console.log(`Adding new value ${value} into the stack`);
    this.storage[this.count] = value;
    this.count++;
  }
  
  pop() {
    if(this.count === 0) {
      console.log("Nothing to remove from the stack.");
      return undefined;
    }
    let removedValue = Object.assign(this.storage[this.count-1]);
    console.log(`Removing value ${removedValue} from the stack`);
    delete this.storage[this.count];
    this.count--;
    return removedValue;
  }
  
  size() {
    console.log("Size of the stack is: ");
    return this.count;
  }
  
  peek() {
    console.log(`Returning peek value ${this.storage[this.count-1]} in the stack`);
    return this.storage[this.count-1];
  }
  
  list() {
    console.log("Listing elements in the stack.");
    for(let i = 0; i < this.count; i++) {
      console.log(this.storage[i]);
    }
  }
} 

var myStack = new Stack();

console.log(myStack);
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.push(1));
console.log(myStack.push(2));
console.log(myStack.push(3));
console.log(myStack.push(4));
myStack.list();
myStack.peek();
console.log(myStack.pop());
myStack.peek();
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
myStack.peek();
myStack.list();

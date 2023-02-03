class Set {
  count = 0;
  collection = [];
  
  //Method to add new element in to the set.
  add(value) {
    console.log(`Adding the element ${value} in to the set.`);
    if(this.has(value)) {
      return undefined;
    }
    else {
      this.collection[this.count] = value; 
      this.count++;
    }
  }
  
  //Method to remove an element from the set.
  remove(value) {
    console.log(`Removing the element ${value} from the set.`);
    for(let i = 0; i < this.count; i++) {
      if(this.collection[i] === value) {
        delete this.collection[i];
        this.count--;
      }
    }
  }
  
  //Method to list the elements from the set.
  list() {
    console.log("Listing elements in the set.");
    for(let i = 0; i < this.count; i++) {
      console.log(this.collection[this.count]);
    }
  }
  
  //Method to check the presence of an element in the set.
  has(value) {
    console.log(`Checking the presence of ${value} in the set.`);
    for(let i = 0; i < this.count; i++) {
      if(this.collection[i] === value) {
        console.log(`Value found at the position ${i}`);
        return true;
      }
    }
    
    return false;
  }
  
  values() {
    return this.collection;
  }
}

let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add("1");
mySet.add("2");
console.log(mySet.values());

mySet.remove("2");
console.log(mySet.values());

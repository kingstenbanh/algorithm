//  A stack is a basic data structure that can be logically thought as linear structure represented by a real physical stack or pile, a structure where insertion and deletion of items takes place at one end called top of the stack. The basic concept can be illustrated by thinking of your data set as a stack of plates or books where you can only take the top item off the stack in order to remove things from it.
//  The basic implememntation of a stack is also called a LIFO (Last in First Out) to demonstrate the way it accesses data, since as we will see there are various variations of stack implementations.
//  There are basically three operations that can be performed on stacks. They are
//  1) inserting an item into a stack (push)
//  2) deleting an item from the stack (pop)
//  3) displaying the contents of the stack (pip)
var Stack = function() {
  this.storage = [];
  this.size = 0;
  this.limit = 4;
};

/**
 * push - adds an item onto the stack
 */
Stack.prototype.push = function(value) {
  this.size++;
  this.storage[this.size] = value;
};

/**
 * top - returns the last item pushed onto the stack
 */
Stack.prototype.top = function() {
  return this.storage[this.size];
};

/**
 * pop - removes the most-recently-pushed item from the stack
 */
Stack.prototype.pop = function() {
  var result = this.storage[this.size];
  delete this.storage[this.size];
  this.size--;
  return result;
};

/**
 * isEmpty - true if no more items can be popped and there is no top item
 */
Stack.prototype.isEmpty = function() {
  return this.size === 0;
};

/**
 * isFull - true if no more items can be pushed
 */
Stack.prototype.isFull = function() {
  return this.size === this.limit;
};

/**
 * getSize - returns the numbers of elements on the stack
 */
Stack.prototype.getSize = function() {
  return this.size;
};

var newStack = new Stack();
console.log('Is the stack empty?', newStack.isEmpty());
console.log('Is the stack full?', newStack.isFull());
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);
console.log('The last item pushed onto the stack is ', newStack.top());
console.log('Current status of the stack', newStack);
console.log('Is the stack full?', newStack.isFull());

// function of stack: push, pop, peek,lenth
/*

A stack is a data stucture that holds a list of elements, Astack works based on the LIFO principle Last in, First out
neaning that the most recently added element is the first one to remove 

A Stack has two main operations that occure only at the top of the stack : PUSH() AMD POP(). THE pusj operation places an 
element at the top of the stack whereas the pop operation removes an element from the top of the stack

A  stack has many application: For example, the simplest one is to reverse a word. to do so, you push a word into the stack,
letter by letter, and pop the letters from the stack

 */
var letters = []; // this is our stack
var word = "racecar"

var rword = ""


// put letters of words into stack
for (var i = 0; i < word.length; i++){
    letters.push(word[i])
}

console.log(letters)


// pop of the stack in reverse order
for (var i =0;i<word.length; i++){
    rword += letters.pop()
}

console.log(rword)

if(rword ===word){
    console.log(word + "is a palindrome")
}
else{
    console.log(word + 'its not a palindrome')
}

// stack function 

// create a stack
var Stack = function(){
    this.count = 0
    this.storage = {}


// adds a value onto the end of the stack

this.push = function(value){
    this.storage[this.count]= value;
    this.count++;
}

// removes and return the value at the end of the stack
this.pop = function(){
    if(this.count===0){
        return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
}

this.size = function(){
    return this.count;
}

// Return the value at the end of the stack 
this.peek = function(){
    return this.storage[this.count-1];
}

}
var myStack = new  Stack()

myStack.push(1)
myStack.push(2)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())

myStack.push('freeCodeCamp')
console.log('size',myStack.size())
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())

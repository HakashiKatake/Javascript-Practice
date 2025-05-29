// Stack (primitive) 



// heap (non-primitive)


let myName = "Saurabh";
let anotherName = myName;

console.log(myName); // "Saurabh"
console.log(anotherName); // "Saurabh"

anotherName = "Saurabh Gupta";
console.log(myName); // "Saurabh"
console.log(anotherName); // "Saurabh Gupta"

// Primitive types are stored in the stack, and they are copied by value.


let person = {
    name: "Saurabh",
    age: 30
};

let anotherPerson = person;

console.log(person); // { name: "Saurabh", age: 30 }


anotherPerson.age = 31;

console.log(anotherPerson.age);
console.log(person.age); // 31

// Non-primitive types (objects) are stored in the heap, and they are copied by reference.
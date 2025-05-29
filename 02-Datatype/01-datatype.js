//primitive 

// 7 primitive data types

// 1. String
let str = "Hello, World!";


// 2. Number
let num = 42; // can be integer or float

// 3. BigInt
let bigInt = 1234567890123456789012345678901234567890n; // note the 'n' at the end

// 4. Boolean
let isTrue = true; // or false

// 5. Undefined
let notDefined; // variable declared but not initialized

// 6. Null
let emptyValue = null; // intentional absence of any value

// 7. Symbol (ES6)
let uniqueSymbol = Symbol("description"); // unique and immutable value, often used as object property keys


// reference data types (non-primitive)

// 1. Object
let person = {
    name: "John Doe",
    age: 30,
    isEmployed: true
};

// 2. Array

let numbers = [1, 2, 3, 4, 5]; // array of numbers

// 3. Function
function greet() {
    console.log("Hello!");
}

console.log(typeof str); // "string"
console.log(typeof num); // "number"
console.log(typeof bigInt); // "bigint"
console.log(typeof isTrue); // "boolean"
console.log(typeof notDefined); // "undefined"
console.log(typeof emptyValue); // "object" (this is a quirk in JavaScript)
console.log(typeof uniqueSymbol); // "symbol"
console.log(typeof person); // "object"
console.log(typeof numbers); // "object" (arrays are a type of object in JavaScript)
console.log(typeof greet); // "function"
// Functions are also objects in JavaScript, so typeof will return "function"



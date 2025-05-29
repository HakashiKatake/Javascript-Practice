//singleton 
// Object.create()

const singleton = {}

const mySym = Symbol("key1");



//object literal
const person = {
    name: "saurabh",
    [mySym]: "key1",
    age: 30,
    location: "India",
    "email": "test@gmail.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Tuesday", "Wednesday"],

}

// object constructor
const personConstructor = new Object({
    name: "saurabh",
});


console.log(person.email);
console.log(person["email"]); // accessing property using bracket notation

console.log(person[mySym]);

person.email = "yoo@gmail.com"
//Object.freeze(person); // makes the object immutable, no new properties can be added or existing properties can be modified
console.log(person);
person.email = "dsad"
console.log(person.email); 


person.gretting = function () {
    console.log("Hello");
}


console.log(person.greeting); // undefined, because the object is frozen and no new properties can be added
console.log(person.gretting());

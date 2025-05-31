//truty or falsy values

const userEmail = "saurabh@gmail.com"

if(userEmail) {
    console.log("Email is present");
} else {
    console.log("Email is not present");
}


// Falsy values in JavaScript

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

//"0", 'false', " ", []. {}, function(){} 

const userName = [];

if(userName.length === 0) {
    console.log("User name is empty");
}


const emptyObject = {};

if(Object.keys(emptyObject).length === 0) {
    console.log("Object is empty");
}

//nullish coalescing operator


let val1; 

val1 = 5 ?? 10;
val1 = null ?? 10;
val1 = undefined ?? 10;
val1 = null ?? undefined ?? 10;

console.log(val1); 


//ternary operator

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("Ice tea is affordable") : console.log("Ice tea is expensive");

let score = "33";

console.log(typeof score);
console.log(typeof (score))

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

//"33" -> 33
// "33abc" -> NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 -> true
// 0 -> false
// "abc" -> true
// "" -> false

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(typeof someNumber);
console.log(typeof stringNumber);

//operations

let value = 3
let negValue = -value;
console.log(negValue)

//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2/2)
//console.log(2**2) //exponentiation
//console.log(2%2) //modulus

let str1 = "hello";
let str2 = "world";

let str3 = str1  + str2;
console.log(str3); //concatenation

console.log("1"+2);
console.log(1+"2");
console.log("1" + 2 + 2)
console.log(1 + 2 + "2");

console.log(+true);
console.log(+false);
console.log(+"abc"); //NaN
console.log(+""); 

let num1, num2, num3;

num1 = num2 = num3 = 2 + 2;



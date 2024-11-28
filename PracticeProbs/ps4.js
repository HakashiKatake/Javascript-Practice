console.log("Sar\"".length)

let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");

if (text.startsWith("Hello")) {
    console.log("The string starts with 'Hello'")
} else {
    console.log("The string does not start with 'Hello'")
}

if(text.endsWith("universe.")) {
    console.log("The string ends with 'universe.'")
} else {
    console.log("The string does not end with 'universe.'")
}

console.log(text.toLowerCase())

console.log(text.toUpperCase())

let str2 = "Please give Rs 1000"
let amount = Number.parseInt(str2.slice(15))
console.log(amount)
console.log(typeof(amount))




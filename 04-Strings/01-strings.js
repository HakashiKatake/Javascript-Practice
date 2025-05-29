const name = "Saurabh";

const repoCount = 10;

console.log(name+ repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("GTA V"); // String object, not a primitive string

console.log(gameName[0]);

console.log(gameName.__proto__);

console.log(gameName.length); // Length of the string object
console.log(gameName.toUpperCase()); // Convert to uppercase
console.log(gameName.toLowerCase()); // Convert to lowercase
console.log(gameName.charAt(0)); // Get character at index 0
console.log(gameName.indexOf("V")); // Find index of character 'V'

const newString = gameName.substring(0,4);

console.log(newString); // Extract substring from index 0 to 4

const anotherString = gameName.slice(-4 ,4);
console.log(anotherString); // Extract substring from index 0 to 4 using slice

const newStringOne = "  Saurabh";

console.log(newStringOne.trim())

const newStringTwo = "Saurabh Gupta";
console.log(newStringTwo.replace("Gupta", "Singh")); // Replace 'Gupta' with 'Singh'
console.log(newStringTwo.replaceAll("a", "o")); // Replace all occurrences of 'a' with 'o'

const newStringThree = "Saurabh Gupta";
console.log(newStringThree.includes("Saurabh")); // Check if 'Saurabh' is included in the string


console.log(gameName.split(" ")); // Split the string into an array using space as a delimiter

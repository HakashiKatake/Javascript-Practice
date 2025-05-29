const myArr = [0,1,1,2,3];

console.log(myArr);
console.log(myArr[0]); // 0
console.log(myArr[1]); // 1



const heros = ["Thor", "Ironman", "Hulk", "Spiderman", "Captain America"];
console.log(heros);

console.log(heros[0]); // Thor
console.log(heros[1]); // Ironman

//methods

myArr.push(4); // adds 4 at the end
console.log(myArr); // [0, 1, 1, 2, 3, 4]

myArr.pop(); // removes last element
console.log(myArr); // [0, 1, 1, 2, 3]

myArr.unshift(-1); // adds -1 at the beginning
console.log(myArr); // [-1, 0, 1, 1, 2, 3]

myArr.shift(); // removes first element
console.log(myArr); // [0, 1, 1, 2, 3]

console.log(myArr.includes(2)); // true
console.log(myArr.indexOf(2)); // 3

const newArr = myArr.join();
console.log(newArr); // "0,1,1,2,3"

console.log("A" , myArr);

const myn1 = myArr.slice(1, 3); // extracts elements from index 1 to 2 (3 is not included)
console.log(myn1); // [1, 1]
console.log("B", myArr);

const myn2 = myArr.splice(1, 3); 
console.log(myn2); // [1, 1, 2]
console.log("C", myArr); // [0, 3]






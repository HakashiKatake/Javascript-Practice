const marvel_heros = ["Thor", "Ironman", "Hulk", "Spiderman", "Captain America"];
const dc = ["Batman", "Superman", "WonderWoman", "Flash", "Aquaman"];

marvel_heros.push(dc);
console.log(marvel_heros); 

const allHeros = marvel_heros.concat(dc);
console.log(allHeros); // ["Thor", "Ironman", "Hulk", "Spiderman", "Captain America", Array(5)]

const all_new_heros = [...marvel_heros, ...dc];
console.log(all_new_heros); // ["Thor", "Ironman", "Hulk", "Spiderman", "Captain America", "Batman", "Superman", "WonderWoman", "Flash", "Aquaman"]

const another_array = [1, 2, 3, 4, 5, [4,5,6], 7, [6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity); // flattens the array to a depth of 2
console.log(real_another_array); // [1, 2, 3, 4, 5, 4, 5, 6, 7, 6, 7, 4, 5]


console.log(Array.isArray(another_array)); // true
console.log(Array.from("hitest"))
console.log(Array.from({name:"saurabh"}));

let score1 = 100
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]


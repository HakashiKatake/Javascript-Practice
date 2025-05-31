// while (condition) {
//     // code to execute while condition is true
    
// }

// while (2==2) {
//     console.log("This will run forever because 2 is always equal to 2");
//     // To stop this loop, you would need to manually terminate the program.
// } 


let index = 0;
while (index <=10) {
    console.log(`Current index: ${index}`);
    index++;
}


let myArray = [10, 20, 30, 40, 50];

let arr = 0;
while (arr < myArray.length) {
    console.log(`Element at index ${arr}: ${myArray[arr]}`);
    arr++;
}



let score = 1;

do {
    console.log("Current score:", score);  
    score++;
    
} while (score <= 5);
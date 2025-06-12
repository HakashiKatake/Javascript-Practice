const myNumb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// const newNumb = myNumbs.map((num) => {
//    return num + 10;
// })

// console.log(newNumb);


const newNumbs = myNumb.map((num) => num*10)
                        .map((num) => num +1)
                        .filter((num) => num >= 50)

console.log(newNumbs);

const myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// const newNumbs = myNumbs.filter((num) => {
//     return num > 5;
// })
// console.log(newNumbs);

// //in a scope of a block you have to use return keyword

// const newNumbs2 = myNumbs.filter((num) => {num > 5});
// console.log(newNumbs2);


// const newNums = []

// myNumbs.forEach((nums) => {
//     if (nums > 5) {
//         newNums.push(nums);
//     }
// }
// );

// console.log(newNums);


const books = [
    { title: "Book 1", author: "Author A", year: 2020 },
    { title: "Book 2", author: "Author B", year: 2018 },
    { title: "Book 3", author: "Author C", year: 2021 },
    { title: "Book 4", author: "Author D", year: 2019 },
    {title: "Book 5", author: "Author E", year: 2022},
    
]

const userBooks = books.filter((book) => {
    return book.title === "Book 1"
})

console.log(userBooks);


const userBooks2 = books.filter ((book) => {
    return book.year >= 2018 && book.author === "Author B";
})

console.log(userBooks2);


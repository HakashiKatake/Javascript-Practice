const coding = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];


// coding.forEach(function (item) {
//     console.log(item);
    
// })

// coding.forEach((item) =>  {
//     console.log(item);
// })

// function printItem(item) {
//     console.log(item);
// }

// coding.forEach(printItem);


// coding.forEach((item, index, arr) => {
//     console.log(`Item: ${item}, Index: ${index}, Array: ${arr}`);
// }
// );

const myCoding = [
    {
        languageName: "JavaScript",
        type: "Dynamic",
    },
    {
        languageName: "Python",
        type: "Dynamic",
    },
    {
        languageName: "Java",
        type: "Static",
    },
    {
        languageName: "C++",
        type: "Static",
    },
    {
        languageName: "Ruby",
        type: "Dynamic",
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName, item.type);
    
})

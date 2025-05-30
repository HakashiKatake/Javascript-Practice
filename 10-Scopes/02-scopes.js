function one() {
    const username = "Saurabh";

    function two() {
        const website = "example.com";
        console.log(username); // John
    }

    //console.log(website);
    two();
    
}

//one();


if(true) {
    const username = "John";
    if (username === "John") {
        const website = "example.com";
        console.log(username + website); // example.com
    }
    //console.log(website);
    
}

//console.log(username);


//interesting 

function addOne(value) {
    return value + 1;
}

console.log(addOne(5)); // 6


// console.log(addTwo(5)); //error 
const addTwo = function(value)  {
    return value + 2;
}

console.log(addTwo(5)); // 7


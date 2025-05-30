function add() {
    return 2 + 2;
}

console.log(add()); // 4
console.log(add);


function loginUserMessage(username="sam") {
    if(!username) {
        console.log("Please enter a username");
        return;
    }
    return `User ${username} logged in successfully`;
}


console.log(loginUserMessage("Saurabh")); // User Saurabh logged in successfully
console.log(loginUserMessage()); // Please enter a username

function addTwoNumbers(a, b) {
    let result = a + b;
    return result;
}

console.log(addTwoNumbers(5, 10)); // 15
console.log(addTwoNumbers);

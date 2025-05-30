
function calculateCartPrice(...num1) {
    return num1;
}

console.log(calculateCartPrice(10, 20, 30, 40)); // [10, 20, 30, 40]


function calculateCartPrice(val1, val2, ...num1) {
    return num1;
}
console.log(calculateCartPrice(10, 20, 30, 40)); // [30, 40]


const user = {
    username: "Saurabh",
    price: 199
}

function handleObj(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleObj(user); 


const myNewArray = [1, 2, 3, 4, 5];


function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray)); // 2



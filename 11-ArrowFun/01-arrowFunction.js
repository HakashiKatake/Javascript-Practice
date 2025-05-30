const user = {
    username: "Saurabh",
    price: 199,
    welcomeMessage: function() {
        
        console.log(`Welcome ${this.username} to the course priced at ${this.price}`);
        console.log(this);
        
        
    }



}

user.welcomeMessage()

user.username = "John";
user.welcomeMessage()

console.log(this);


function test(){
    console.log(this);
    let username = "y"
    console.log(this.username);
        
}

test();


const chai = () =>{
    console.log(this);
    let username = "y";
    console.log(this.username);
}

chai();


() => {

} // Arrow functions do not have their own 'this' context

const arrowFunction = (num1, num2) => {
    return num1 + num2;
}

console.log(arrowFunction(5, 10)); // 15

const addTwo = (num1, num2) => (num1 + num2);
console.log(addTwo(5, 10)); // 15

const addThree = (num1, num2, num3) => {{usernmae:"Saurabh"}}
console.log(addThree(5, 10, 15)); // { username: 'Saurabh' }




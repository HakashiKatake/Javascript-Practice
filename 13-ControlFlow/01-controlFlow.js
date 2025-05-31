// if 
let condition = true;  
const temperature = 41;
const isUserloggedIn = true;  



if (condition) {
  // code to execute if condition is true
}

// if-else

if (condition) {
    // code to execute if condition is true
}else {
    // code to execute if condition is false
}

if (2 =="2" ) {
    console.log("executed");
    
}

if (2 === "2" ) {
    console.log("executed");
}

const score = 200;

const power = "run";
if (score>100) {
    const power = "fly";
    console.log(`user power: ${power}`);
    
}

console.log(`user power: ${power}`);


// short hand notation

const balance = 1000;

if (balance > 0) console.log("You have a positive balance.");


//nested if 


if( balance <  500) {
    console.log("less than 500");
    
} else if (balance < 750) {
    console.log("less than 750");
    
} else if (balance < 900) {
    console.log("less than 900");
    
} else {
    console.log("greater than 900");
}


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
const guestUser = false;

if(userLoggedIn && debitCard && 2==3) {
    console.log("You can make a purchase.");
}


if (loggedInFromGoogle || loggedInFromEmail || guestUser) {
    console.log("You are logged in from Google or Email.");
}



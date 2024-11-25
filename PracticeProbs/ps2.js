//practice set prob 1

let age = prompt("Enter your age");
if (age>10 && age<20) {
    console.log("Your age lies between 10 and 20");
} else {
    console.log("Your age doesnt lies between 10 or 20")
}

//prob 2
switch (age) {
    case 10:
        console.log("Age is 10")
        break;
    case 20:
        console.log("Age is 20")
        break;
    default:
        console.log("Age is not 10 or 20")
        break;

}

//prob 3
let agee = prompt("Enter your age")
agee = Number.parseInt(age)
if(num%2==0 && num%3==0) {
    console.log("num is divisible by 2 and 3")
}

//prob 4

if (age>=18) {
    console.log("You can drive")
} else {
    console.log("You cannot drive")
}

// or 

let ageee = prompt("Enter your age")
let a = ageee > 18? "You can drive" : "You cannot drive"
console.log(a)
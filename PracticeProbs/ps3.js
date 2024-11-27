let marks = {
    harry: 80,
    rohan: 60,
    shubham: 90,
    monika: 70
}

for (let i=0; Object.keys(marks)[i]; i++) {
    console.log(Object.keys(marks)[i])
}

for (let key in marks) {
    console.log(key)
}

let cn = 4
let i
while (i!=cn) {
    i = promot("Enter a number")
    
}
console.log("You entered wrong number")


const mean = (a,b,c,d) => {
    return (a+b+c+d)/4
}

console.log(mean(1,2,3,4))
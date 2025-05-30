let a = 10;
const b  = 20; //global scope
//var c = 30;

if (true) {
    let a = 210; //blocked scope
    const b = 20;
    console.log("INNER: ", a)
   
}

console.log(a);
console.log(b);





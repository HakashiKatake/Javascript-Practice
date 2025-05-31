//immediately invoked function expression

(function yo() {
  console.log("I am an IIFE");
})();


( () => {
    console.log("I am an IIFE with arrow function syntax");
    
})();

// IIFE with parameters

(function (name) {
    console.log(`Hello, ${name}! I am an IIFE with parameters.`);
}
)("Saurabh");


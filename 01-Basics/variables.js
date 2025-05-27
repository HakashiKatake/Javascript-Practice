const accountId = 132232;

let accountEmail = "saurabh@gmail.com";
var accountPassword = "1234abcd";
accountCity = "Delhi"; 
let accountState;

// accountId = 2; not allowed, const cannot be reassigned
accountEmail = "hc@gc.com";
accountPassword = "1234xyz";
acountCity = "Mumbai"; 

/* 
prefer not to use var, use let or const instead
var is function scoped, let and const are block scoped
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

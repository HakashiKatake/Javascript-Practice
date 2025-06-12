const myNumbs = [1,2,3]

// const tot = myNumbs.reduce((acc, currval) => {
//     return acc + currval
// },0)

// console.log(tot);




const tot = myNumbs.reduce((acc, currval) => {
    console.log(`acc: ${acc} , val: ${currval}`);
    return acc + currval

   
},0)


console.log(tot);


const myToto = myNumbs.reduce((acc, curr) => acc+curr,0)

console.log(myToto);


const shoppingCart = [
    {
        item: "js course",
        price: 99
    },
    {
        item: "py course",
        price: 90
    },
    {
        item: "java course",
        price: 96
    },
]

const pay = shoppingCart.reduce((acc, item)=> acc+item.price,0)
console.log(pay);

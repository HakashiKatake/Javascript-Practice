const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num); // 1 2 3 4 5
}

const greetings = "Hello world!"
for( const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
}


//maps 


const map = new Map();

map.set('IN', 'India');
map.set('US', 'United States');
map.set('UK', 'United Kingdom');


console.log(map); // Map(3) { 'IN' => 'India', 'US' => 'United States', 'UK' => 'United Kingdom' }

for (const [key, value] of map) {
    console.log(key, value);
}



const myObject = {
    'game1': 'NFS',
    'game2': 'FIFA',
}


// for (const [key, value] of myObject) {
//     console.log(key, value);
// }


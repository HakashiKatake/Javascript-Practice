const tinderUser = {}

tinderUser.id = '12345'
tinderUser.name = 'John Doe'
tinderUser.isLoggedIn = true
console.log(tinderUser);

const regularUser = {
    email: "test@gmail.com",
    username: {
        firstName: "Saurabh",
        lastName: "Gupta"
    }
}

console.log(regularUser);

console.log(regularUser.username.firstName);

const obj1 =  {1:"a", 2:"b"}

const obj2 =  {3:"a", 4:"b"}

// const obj3 = {obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2)
// console.log(obj4);

const obj3 = {...obj1, ...obj2};
console.log(obj3);

const users = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        isActive: true
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 25,
        isActive: false
    },
    {
        id: 3,
        name: "Alice Johnson",
        age: 28,
        isActive: true
    }
]

console.log(users[0].name);

console.log(tinderUser);

console.log(Object.keys(tinderUser)); // ['id', 'name', 'isLoggedIn']
console.log(Object.values(tinderUser)); // ['12345', 'John Doe', true]
console.log(Object.entries(tinderUser)); // [['id', '12345'], ['name', 'John Doe'], ['isLoggedIn', true]]
console.log(tinderUser.hasOwnProperty('id')); // true

const user = {
    username:"yo",
    login:6,
    signIn:true,
    getUser: function(){
        // console.log(`username: ${this.username}`);
        // return 0
        console.log(this);
        
    }

    
}


console.log(user.login);
console.log(user.getUser());
console.log(this);


function User(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
   // return this implicitly defined
}


// const userOne = User("d",1,true)
// const userTwo = User("d",1,true)
// console.log(userTwo);



const userOne = new User("d",1,true)
const userTwo = new User("d",1,true)
console.log(userTwo);

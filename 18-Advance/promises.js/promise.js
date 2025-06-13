const promiseOne = new Promise((resolve, reject) => {
    //do an async task
    //db calls, cyptography, network
    setTimeout(()=> {
        console.log('async task is complete');
        resolve()
    }, 1000)
})


promiseOne.then(() =>{
    console.log("promoise done");
    
})

new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("Async task 2");
        resolve()
        
    })
}).then(()=>{
    console.log("async 2 resolved");
    
})


const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: "Chai", email:"chai@example.com"})
    },1000)
}) 

promiseThree.then((user)=>{
    console.log(user);
    
})


const promiseFour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({username:"yoo", password:"123"})
        } else {
            reject('error')
        }
    })
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
    
 }).then((username)=>{
    console.log(username);
    
}).catch((error)=>{
    console.log(error);
    
}).finally(()=>{
    console.log("promise is done");
    
})


const promiseFive = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        let error = false
        if (!error) {
            resolve({username:"js", password:"232"})
        } else {
            reject('JS error')
        }
    })
})


async function consumePromiseFive() {
    try {
           const response = await promiseFive
        console.log(response);
    } catch(err) {
        console.log(err);
        
    }

 
    
}
consumePromiseFive()


// async function getAllUsers() {
//     try {
//         const response =  await fetch('https://api.github.com/users/hakashikatake')
//         const data = await response.json()
//         console.log(data);
//     } catch(err) {
//         console.log(err);
        
//     }
    
// }

// getAllUsers()


fetch('https://api.github.com/users/hakashikatake').then((response)=>{
    return response.json();

}).then((data)=>{
    console.log(data);
    
}).catch((err)=>{
    console.log(err);
    
})

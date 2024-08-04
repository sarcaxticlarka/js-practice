const promiseOne = new Promise(function(resolve, reject){
    //do and async task => DB calls, cryptography, network call,
    setTimeout(() => {
        console.log("async task is complete");
        resolve()
    }, 1000);
})
promiseOne.then(function(){
    console.log("promise consumed");
    
})


new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },100)
}).then(function(){
    console.log("async 2 resolved");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "kurkure", email:"kurkure@gmail.com"})
    }, 1000)
})
promiseThree.then(function(user){
console.log(user);

})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(()=>{
        let error = true
        if(!error){
            resolve({username:"underxcore", password: "123654789"})
        } else{
            reject("Error: something went wrong")
        }
    },1000)
})

promiseFour
.then(function(user){
    console.log(user);
    return user.username
    
})
.then((username)=>{
    console.log(username);
    
})
.catch((err)=>{
    console.log(err);
    
}).finally(() => console.log(`the promise is either resove or rejected`)
)


const promsiseFive = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        let error = true
        if(!error){
            resolve({language:"javaaScript", motive:"learning"})
        } else{
            reject("Error: Js went wrong")
        }

    }, 100)
})

async function consumePromiseFive() {
    try{
        const response = await promsiseFive
        console.log(response);
    
    } catch(error){
        console.log(error);
        
    }
}
consumePromiseFive()


////METHOD1//////////
// async function getAllUser() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = await response.json()

//     console.log(data);
//     }catch(err){
//         console.log("E:", err);
        
//     }
    
// }

// getAllUser()


////METHOD2//////
fetch("https://jsonplaceholder.typicode.com/users").then((response)=>{

    return response.json()
})
.then((data) => {
    console.log(data);
    
})
.catch((err) => {
    console.log(err);
    
})
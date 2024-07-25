//if

// if(true){ //this code is run

// }

// if(false){ //false  code is not execute
    
// }




// <, >, <=,>=, ==, !=, ===

// if(2 =="2"){
//     console.log("executed") //executed
// }
//if

// if(true){ //this code is run

// }

// if(false){ //false  code is not execute
    
// }

 
// <, >, <=,>=, ==, !=, ===

 

 

 
// if(2 != 3){
//     console.log("executed") //executed
// }


const isUserLoggedin = true
const temparature = 41

if(temparature < 50){
    // console.log(`today teprature is ${temparature}`)
}else{
    // console.log(`today temperature is ${temparature} we recomend to stay in your home`)
}


const score = 200

if (score > 100){
    const power = "fly"
    // var power = "fly" // we dont use var because var is global scope we can use this any where 
    // console.log(`user: ${power}`)
}
// console.log(`user: ${power}`) afterr scope it show error power is not defined 

// console.log(`user: ${power}`) // when we use var we can exist power


// const balance = 600

// if(balance > 500) console.log("test"); //implicit scope

// if(balance < 500){
//     console.log(`your balance is less than 500 and your current balace in your account is ${balance}`);
// }else if(balance < 750){
//     console.log(`your balance is greater than 500 and your current balace in your account is ${balance}`);
// }
// else{
//     console.log(`your balance is greater than 750 and your current balace in your account is ${balance}`);
// }

let userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const LoggedinFromEmail = true

 if(userLoggedIn && debitCard && 2==2){
    console.log("allow to buy course");
 }else{
    console.log("you dont full fill creteria");
 }

 if(loggedInFromGoogle || LoggedinFromEmail){
  console.log("user logged in")
 }
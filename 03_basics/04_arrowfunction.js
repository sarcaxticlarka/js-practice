const user = {
    username: "kurkure",
    price: 557,

    welcomeMsg : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    } 

}

// user.welcomeMsg()

// user.username ="underxcore" 
// user.welcomeMsg()
// console.log(this);

/////note we only use ()


// function chai(){
//     let username = "kurkure"
//     console.log(this.username);
// }
// chai()

const chai = ()=>{
    let username = "kurkure"
    console.log(this.username);//undefined
    console.log(this);//{} empty pracities
}
// chai()

/***************AROW*******************/

const addTwo = (num1, num2)=>{
    return num1 + num2
}
// console.log(addTwo(1,1));

/*********Implicit function*************/
const addTwwo = (num1, num2)=>  num1 + num2
const addTwwwo = (num1, num2)=>  (num1 + num2)

console.log(addTwwo(88,12));

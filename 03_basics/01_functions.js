// we write function to conserve time and do it again and agaib by calling them 


// function sayMyNmae(){
//     console.log("k");
//     console.log("u");
//     console.log("r");
//     console.log("k");
//     console.log("u");
//     console.log("r");
//     console.log("e");
// }

// sayMyNmae() 


// function addTwoNumbers( num1, num2){
//     console.log(num1 + num2);
// }

//  const result = addTwoNumbers(5, 5)//10
// addTwoNumbers(5, "4") 54
// addTwoNumbers(5, "g") //5g

// console.log("Result is ", result); //undefined


function addTwoNumbers( num1, num2){
    
    // let result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(5,7)

// console.log("Result is", result);

function loginUserMessage(username = "sarcaxtic_larka"){

    // if(username === undefined){
    //     console.log("please enter a username")
    //     return
    // }
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}
const message = loginUserMessage("kurkure")

// console.log(message);//kurkure just logged in

console.log(loginUserMessage());// undefined and after defining it comes sarcaxtic larka
console.log(loginUserMessage("kurkure"));//kurkure just logged in
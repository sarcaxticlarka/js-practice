/******Reduce********/


const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 3)
 
// console.log(myTotal);

/***using arrow function*** */



const myTotal = myNum.reduce((acc, curval) => acc +curval, 0)

// console.log(myTotal);


const courseCart = [
    {
        itemNmae: "js course",
        price: 2999,
        faculty: "Hitesh Choudhary"
    },
    {
        itemNmae: "Python",
        price: 3499,
        faculty: "Shadha didi"
    },
    {
        itemNmae: "Pyhton",
        price: 1999,
        faculty: "Harry Bhai"
    },
    {
        itemNmae: "Data Scince",
        price: 3500,
        faculty: "Newton School "
    },
]

const price  = courseCart.reduce((acc, item) =>  acc + item.price , 0)

console.log(price);

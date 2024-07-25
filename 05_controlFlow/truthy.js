const userEmail = "kurkure@gmail.com"


if(userEmail){
    console.log("got user email")
} else{
    console.log("don't have user email")
}

///falsey values
// false, 0, -0, bigint 0n, "", null, undefined, NaN

// const val = false == ""
// console.log(val); //true

// truty values
//'0', [], "false", " "(space in string),  function(){}

const ArrayLength = [5, 3,  8]
if (ArrayLength.length === 0){
    console.log("array is empty");
} else{
    console.log(`array is not empty it's lenght is ${ArrayLength.length}`);
}

const emptyObject = {}

if(Object.keys(emptyObject).lenght === 0){
    console.log("object is empty");
} 


//nullish coalescing operator (??): null undefined

let val1;

val1 = 5?? 10
val2 = null ?? 50
val3 = undefined ?? 15


console.log(val1);
console.log(val2);
console.log(val3);


//Terniary operator

// condition ? true:false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80"): console.log("more than 80");
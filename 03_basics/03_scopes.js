// if(true){
//     let a = 10
//     const b = 20
//     var c = 30
// }


// console.log(a);
// console.log(b);
// console.log(c);


let a = 115

if(true){
    let a = 10
    const b = 20
    // console.log("inner: ", a);
}
// console.log(a);


function one(){
    const username = "kurkure"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

if (true){
    const username = "kurkure"
    if(username === "kurkure"){
        const website = "youtube"
        console.log(username +"", website);
    }
    // console.log(website);
    console.log(username);
}

// console.log(username);


///****************intersting***************///


function addOne(num){
    return num + 1
}
console.log(addOne(5));

const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5));
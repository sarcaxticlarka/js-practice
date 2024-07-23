function calculateCartPrice(...num1){
    // ... three dot is rest operator/spread operator
    return num1
}

// console.log(calculateCartPrice(200));
// console.log(calculateCartPrice(200, 300, 400));

const user = {
    username: "underxcore",
    product: "bag",
    price: "800"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
// handleObject(user)
handleObject({
    username: "Kurkure",
    price: 299
})

const myNewArray = [200, 500, 399, 249]

function returnSecondValue(getAValue){
    return getAValue[0]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([236, 589, 999, 301]));
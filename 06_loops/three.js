const arr = [1,2,3,4]

for (const num of arr) {
    // console.log(num);
}

const str = "welcome"

for (const greet of str) {
    // console.log(`each character is ${greet}`);
}


//Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United state of america")
map.set('Fr', "France")

// console.log(map);

for (const [key, value] of map) {
    console.log(key,':-', value);
}

// const myObj = { // object is not itrable
//     game1: "NFS",
//     game2: "BGMI",
//     game3: "Pubg"
// }
// for (const [key, value] of myObj) {
//     console.log(key, ':-', value);
// }
const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "Swift by apple"
}

for (const key in myObj) {
     console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "cpp", "rb","py"]

for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map()  //map is not iritable
// map.set('In', "India")
// map.set('USA', "United state of america")
// map.set('Fr', "France")

// // console.log(map);



// for (const key in map) {

//     console.log(key);
// }
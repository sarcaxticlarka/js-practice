//dates
//date is object instance

let day = new Date()
// console.log(day.toDateString());
// console.log(day.toJSON());
// console.log(day.toLocaleString());
// console.log(day.toLocaleDateString());
// console.log(day.toLocaleTimeString());
// console.log(day.toString());

// console.log(day.toTimeString('en-In'));


// const myCreatedDate = new Date(2024, 6, 21)
// console.log(myCreatedDate.toDateString());

// const myCreatedDate = new Date(2024, 6, 21 ,3)
// console.log(myCreatedDate.toLocaleString());

const myCreatedDate = new Date("07-21-24")
// console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/100));

let newDate = new Date()

// console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default', {
    weekday: "long", 
}));
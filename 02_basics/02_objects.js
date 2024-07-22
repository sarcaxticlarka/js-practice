//singleton
// Object.create

//object literals
 
const mysybl = Symbol("key1")

const jsUser = {
    name: "kurkure",
    "user name" : "yours.kurkure",
    [mysybl] : "mykey1",
    follower: 750,
    following: 300,
    post: 300,
    password: "absckdhjgs"
}
// console.log(jsUser.name);
// console.log(jsUser["name"]);

// console.log(jsUser["user name"]);//sqaure notation is best practice to excess objects
// console.log(jsUser.full name); //using dot we can not get this


// console.log(typeof jsUser[mysybl]);

jsUser.password = "5587684kjhdskjfhs"

// console.log(jsUser)

Object.freeze(jsUser)

jsUser.following = 550
// console.table(jsUser)



// jsUser.greeting = function(){
//     console.log(`hello insta user ${this.name}`);
// }
// console.log(jsUser.greeting());



// const tiderUser = new Object()
// console.log(tiderUser);

const tinderUser = {}

tinderUser.id = "12548"
tinderUser.name = "Munna bhaiya"
tinderUser.isloggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "munnabhaiya@mirzapur.com",
    fullname: {
        username:{
            firstName: "Munna",
            lastName: "bhaiya"
        }
    }
}
// console.table(regularUser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// obj3 = {obj1, obj2}

const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// const obj4 = {...obj1, ...obj2}
// console.log(obj4);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isloggedIn"));
console.log(tinderUser.hasOwnProperty("isloggedOut"));
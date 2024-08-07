let userName = "kurkure     "

// console.log(userName.trim().length);

// console.log(userName.truelength);// we have to create method


let myBooks = ["mushaf", "ishq-e-atish", "pire-kamil"]

let writerName = {
    mushaf: "nimrah ahmad",
    pireKamil: "umerah ahmad",

    getName: function(){
        console.log(`writer of the ${this.mushaf}`);
        
    }
}



Object.prototype.elia = function(){
    console.log(`john elia is present in all object`);
    
}


Array.prototype.books = function(){
    console.log(`readers say thankyou`);
    
}

// writerName.elia()
// myBooks.elia()
// writerName.books()



////inheritance
const User= {
    name:"kurkure",
    email: "kurkure@gmail.com"
}
const Teacher ={
    makeVedio: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport= {
    makeAssingment: "js Assingment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User


//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUserName = "yours.kurkure    "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`true lenth is : ${this.trim().length}`);
    
    
    
}

anotherUserName.trueLength()
"underxcore".trueLength()
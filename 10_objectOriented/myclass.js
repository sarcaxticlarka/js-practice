// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password

//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeuUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const kurkure = new User("kurkure", "kurkure@gmail.com", "987")

// console.log(kurkure.encryptPassword());
// console.log(kurkure.changeuUsername());

// behind the scene

function User(username, email, password) {
    this.password = password;
    this.username = username;
    this.email = email;
    
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeuUsername= function(){
    return `${this.username.toUpperCase()}abc`
}

const user = new User("sqarcaxticlarka" , "sarcaxticlarka@gmail.com", "achaaaa")


console.log(user.encryptPassword());
console.log(user.changeuUsername());



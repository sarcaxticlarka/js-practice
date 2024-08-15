class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);       
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email 
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
        
    }
}

const guru  = new Teacher("kurkure", "kurkure@gmail.com", "765")

guru.addCourse()

const masalachai= new User("masalaChai")
masalachai.logMe()

// console.log(guru === masalachai);

console.log(guru instanceof User);


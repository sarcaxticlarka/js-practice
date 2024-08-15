class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
        
    }

    static createId(){
        return `123`
    }
}

const kurkure = new User("kurkure")

// console.log(kurkure.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const mac = new Teacher("macOs", "macos@gmail.com")
mac.logMe()
console.log(mac.createId());


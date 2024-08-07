// this = window(in browser)
// this = {}(in node)


function SetUserName(username){
    //db call
    this.username = username
    console.log("called");
    
}

function createUser(username, email, password){
    SetUserName.call(this,username) 
    this.email = email,
    this.password = password

}

const kurkure = new createUser("yours.kurkure", "kurkure@kure.com", "kurkure123456")

console.log(kurkure);

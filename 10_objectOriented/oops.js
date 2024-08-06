const user = {
    username: "Kurkure",
    follower: "899",
    following: "400",
    getUserDetails:  function(){
        // console.log("got user details from instagram");
        // console.log(`username: ${this.username}`);
        // console.log(this);
        
        
        
    }

}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const date = new Date() //new is constructor

function User(username, follower, following){
    this.username = username;
    this.follower = follower;
    this.following = following;

    // return this
}


const userOne = new User("underxcore", 1200, 145)
console.log(user);


//Immediately Invoked function Expression
///in this function semicolon play important role

// function chai(){
//     console.log("db connected")
// }
// chai()


(function chai(){
    console.log("this is iife function")
    
})();//agar semicolon hata denge toh next function call nhi hoga error show hoga
 
// global scope se kai baar function pollued hota hai us pollution se bachane ke liye iife ko use krte hai 

(()=>{
    console.log("this is arrow function")
})(); //semicolon is important to run next function if we use iife

((chai)=>{
    console.log(`we have a ${chai} in our menu`)
})("ealichi tea");



(()=>{
    let coffee = "hot coffee";//semicolon also matterhere also
    (()=>{
        console.log(`sir we have only ${coffee} in our menu`);
    })();
})();

// (()=>{
//     let coffee = "hot coffee";
//     (()=>{
//         console.log(`sir we have only ${coffee} in our menu`);
//     })();
// })();

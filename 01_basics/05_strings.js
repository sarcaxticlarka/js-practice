// string is object

const name = "Ashu"
const repocount = 50

// console.log("my name is" + name + "and my repo count" + repocount ); outdated version of wrinting string likr this


// now we write string in backtick

// console.log(`Hello my name  is ${name} and my repo count is ${repocount}`) modern syntax to write string

const apps = new String("Instagram")

// console.log(apps[8]); //m
// console.log(apps.__proto__); //object

// console.log(apps.toUpperCase());
// console.log(apps.charAt(5)); //g
// console.log(apps.indexOf("g")); //5

const newApps = apps.substring(0,4)
// console.log(newApps)

const anotherApps = apps.slice(-8 ,4)
// console.log(anotherApps)

const newApps1 = "   kurkure   "
// console.log(newApps1);
// console.log(newApps1.trim()) // we use trim to avoid extraspace geerally we use this in input field like password, email


const url = "https://underxcore.netlify.app/underxcore%35netlify"

const newUrl = url.replace('%35', '-')

// console.log(url);
// console.log(newUrl);

// console.log(url.includes("underxcore")); //true

// console.log(url.includes("kurkure")); //false

// console.log(url.split("-"));
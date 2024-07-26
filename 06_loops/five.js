const codding= ["js", "ruby", "python", "cpp", "jaba"]

// codding.forEach( e => {
//     console.log(e);
// });

// codding.forEach(function(e){
//     console.log(e);
// })

// function printMe(item){
//     console.log(item);
// }
// codding.forEach(printMe)

// codding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageNmae: "javascript",
        languageName: "js"
    },
    {
        languageNmae: "java",
        languageName: "java"
    },
    {
        languageNmae: "python",
        languageName: "py"
    },
]


myCoding.forEach((item) => {
    console.log(item.languageName);
});

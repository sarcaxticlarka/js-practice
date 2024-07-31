////onClic events=> there is not problem in using this .this is not give more features

// document.getElementById("lotus").onclick= function(){
//     alert("lotus")
// }


///addeventlistner
//attachedEvent
//jQuery- on
// type, timestamp, defaultPrevented
//target. toElement, srcElement, currenTarget,
//clientX, clientY, screnX, screenY
//altkey, ctrlkey, shiftkey, keyCode

// document.getElementById("images").addEventListener("click", function(e){
//     console.log("clicked inside the ul");
// }, false)// false is default generally we dot use this

// document.getElementById("images").addEventListener("click", function(e){
//     console.log("clicked inside the ul");
// }, true) //this is bubbling effect when we use this isme phle parents to child console hoga aur jab false use karenge toh chid to parents hoga print/console

// document.getElementById("lotus").addEventListener("click", function(e){
//     console.log("clicked on lotus");
// }, true)


// document.getElementById("rose3").addEventListener('click', function(e){
//     e.preventDefault()
//     console.log("rose3 clicked");
    
// }, false)



document.querySelector("#images").addEventListener("click", function(e){
// console.log(e.target);
  console.log(e.target.parentNode);
  
  if(e.target.tagName === 'IMG'){
    console.log(e.target.id)
    let removeIt = e.target.parentNode

    // removeIt.parentNode.removeChild(removeIt)
      removeIt.remove()// this is easy to understand
  }
}, false)

///ARRAY

const myArr = [0, 1, 2, 3, 4 ,5, true, "kurkure"]

const myFvrtBook = ["mushaf", "haalim", "pire-kamil", "jannat ke pattey"]

// console.log(myArr[6])

// console.log(myFvrtBook);

myFvrtBook.push("aabe-hayat")
// console.log(myFvrtBook);

myFvrtBook.push("ishq-e-atish")
// console.table(myFvrtBook);

myFvrtBook.pop()
// console.table(myFvrtBook)

// myArr.unshift(6)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);

const newArray = myArr.join()
// console.log(typeof newArray);
// console.log(newArray)


//SLICE, SPLICE

// const myn1 = myArr.slice(1,3)

//  console.log(myn1)
//  console.log("b", myArr);


//  const myn2 = myArr.splice(1,3)
//  console.log(myn2);

// myArr.push(myFvrtBook)
// console.log(myArr);

// let arr3 = myArr.concat(myFvrtBook)
// console.table(arr3);

// let arr3 = [...myArr, ...myFvrtBook]
// console.log(arr3);


const arr4 = [1, 2 , 3 ,[4,5 ,6], 7 ,[8,9,10,[11,12, [13]]]]
// console.log(arr4)

const realArr = arr4.flat(Infinity)
// console.log(realArr);
// console.table(realArr)


console.log(Array.isArray("kurkure"));
console.log(Array.from("kurkure"));
console.log(Array.from({insta:"kurkure"}));//interesting array nd it form empty array
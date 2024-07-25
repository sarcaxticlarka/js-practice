// JAVASCRIPTS EXECUTION CONTEXT
// THERE ARE 3 TYPES

// 1. GLOBAL EXECUTION CONTEXT
// 2. FUNCTION EXECUTION CONTEXT
// 3. EVAL EXECUTION CONTEXT

// {} -> MEMORY CREATION PHASE
//    -> EXECUTION PHASE


let val1 = 10 // memoery phase undefined
let val2 = 5 // memoery phase undefined

function addNum(num1, num2){ //num1 num 2 excution phase
    let total = num1+num2 // memoery phase undefined
    return total //excution phase
}

let result1 = addNum(val1, val2)
let result2 = addNum(7, 5)

console.log(result1)
console.log(result2);
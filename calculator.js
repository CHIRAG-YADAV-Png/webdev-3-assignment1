let opr = process.argv[2]
let n1 = Number(process.argv[3])
let n2 = Number(process.argv[4])

console.log("Calculator Started")

if (opr === 'add') {
    console.log("Result:", n1 + n2)
}
else if (opr === 'sub') {
    console.log("Result:", n1 - n2)
}
else if (opr === 'mult') {
    console.log("Result:", n1 * n2)
}
else if (opr === 'div') {
    if (n2 === 0) {
        console.log("Cannot divide by zero")
    }
    else {
        console.log("Result:", n1 / n2)
    }
}
else {
    console.log("Invalid operation")
    console.log("Use add, sub, mult or div")
}
console.log("Calculator Finished")
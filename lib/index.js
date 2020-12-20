var readlineSync = require('readline-sync');
var firstNum = readlineSync.questionInt("Enter your first number: ")
var secondNum = readlineSync.questionInt("Enter your second number: ")

var func1 = readlineSync.question("Please enter the operation to perform: add, sub, mul, div-")



function func1(sign) {

    if (sign == "add") {
        console.log(add(firstNum, secondNum))
    } else if (sign == "sub") {
        console.log(sub(firstNum, secondNum))
    } else if (sign == "mul") {
        console.log(mul(firstNum, secondNum))
    } else if (sign == "div") {
        console.log(div(firstNum, secondNum))
    }
}

return func1()



function add(num1, num2) {

    return "The result is: " + (num1 + num2)
}

function mul(num1, num2) {

    return "The result is: " + (num1 * num2)
}

function div(num1, num2) {

    return "The result is: " + (num1 / num2)
}

function sub(num1, num2) {

    return "The result is: " + (num1 - num2)
}
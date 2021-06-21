'use strict'
/*
Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя
параметрами.
*/


function sum(num1, num2){
    return num1 + num2;
}
function diff(num1, num2){
    return num1 - num2;
}
function mult(num1, num2){
    return num1 * num2;
}
function div(num1, num2){
    return num1 / num2;
}

/*
Реализовать функцию с тремя параметрами.
*/
function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case "сумма":
            return sum(arg1, arg2)
        case "разность":
            return diff(arg1, arg2)
        case "произведение":
            return mult(arg1, arg2)
        case "деление":
            return div(arg1, arg2)
        default:
            break;
    }
}
alert(mathOperation(14, 12, "сумма"));
alert(mathOperation(14, 12, "разность"));
alert(mathOperation(14, 12, "произведение"));
alert(mathOperation(14, 12, "деление"));
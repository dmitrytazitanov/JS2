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
alert("Сумма чисел равна: " + sum(5, 7));
alert("Разность чисел равна: " + diff(7, 5));
alert("Произведение чисел равна: " + mult(7, 5));
alert("Частное чисел равна: " + div(7, 5));

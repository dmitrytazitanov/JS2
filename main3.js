'use strict'
/*
Объявить две переменные e и f и задать им целочисленные произвольные начальные
значения.
*/
let e = parseInt(prompt("Введите первое число")),
    f = parseInt(prompt("Введите второе число"));

function arfimetic(){
    if(e>=0 && f>=0){
        return e - f;
    }
    if(e<=0 && f<=0){
        return e * f;
    }
    if((e<=0 && f>=0)||(e>=0 && f<=0)){
        return e + f;
    }
}
let result = arfimetic();
alert(result);

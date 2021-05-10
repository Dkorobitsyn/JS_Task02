// // 1.
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 Значение переменной a увеличивается на 1 и затем значение a присваивается переменной c
// d = b++; alert(d);           // 1 Значение переменной b присваивается переменной d, а затем переменная b увеличивается на 1
// c = (2+ ++a); alert(c);      // 5 Значение переменной a увеличивается на 1 и затем значение a складывается с числом 2, результат присваивается переменной c
// d = (2+ b++); alert(d);      // 4 Значение переменной b складывается с числом 2, результат присваивается переменной d, а затем переменная b увеличивается на 1
// alert(a);                    // 3 Переменная a была увеличена префиксным инкрементом два раза
// alert(b);                    // 3 Переменная b была увеличена постфиксным инкрементом два раза

// // 2.
// var a = 2;
// var x = 1 + (a *= 2);
// // В скобках происходит умножение переменной a на 2, затем происходит сложение с 1 и результат присваивается в переменную x, x = 5

// // 3. 
// function himera(a, b){
//     if ((a >= 0) && (b >=0 )) return (a - b)
//     else if ((a<0) && (b<0)) return (a * b)
//     else return a + b;
// }

//  var a = +prompt ("Введите значение первого числа \n a = ");
//  var b = +prompt ("Введите значение второго числа \n b = ");
//  alert ("Результат операции над двумя числами: " + himera(a, b));

// //4. 
// function getRandomNumber (){
//     return Math.floor(Math.random() * (16 - 0))
// }

// a = getRandomNumber();

// switch (a) {
//     case 0: alert ("0");
//     case 1: alert ("1");
//     case 2: alert ("2");
//     case 3: alert ("3");
//     case 4: alert ("4");
//     case 5: alert ("5");
//     case 6: alert ("6");
//     case 7: alert ("7");
//     case 8: alert ("8");
//     case 9: alert ("9");
//     case 10: alert ("10");
//     case 11: alert ("11");
//     case 12: alert ("12");
//     case 13: alert ("13");
//     case 14: alert ("14");
//     case 15: alert ("15");
// }

//5
alert ("Операции над двумя числами");
function summ(a, b){
    return a + b;
};

function multiply(a, b){
    return a * b;
}

function substract(a, b){
    return a - b;
}

function divide(a, b){
    return a / b;
}

var a = +prompt ("Введите значение первого числа \n a = ");
var b = +prompt ("Введите значение второго числа \n b = ");

alert ("Сумма двух чисел равна: " + summ(a, b));
alert ("Произведение двух чисел равна: " + multiply(a, b));
alert ("Разность двух чисел равна: " + substract(a, b));
alert ("Частное двух чисел равно: " + divide(a, b));

//6
function mathOperation(arg1, arg2, opeation){
    switch (opeation){
        case "+": return summ(arg1, arg2);
        case "*": return multiply(arg1, arg2);
        case "-": return substract(arg1, arg2);
        case "/": return divide(arg1, arg2);
    }
}

alert ("Введите дава числа и оператор");
var a = +prompt ("Введите значение первого числа \n a = ");
var b = +prompt ("Введите значение второго числа \n b = ");
do {
var op = prompt ("Введите один из предложенных операторов \n \"+\" , \"-\" , \"*\", \"\\\"  \nоператор = ");
} while ((op != "+") && (op!="*") && (op!="-") && (op!="/"));
var result =  mathOperation(a, b, op);
alert (`Результат операции ${a} ${op} ${b} = ${result}`);

//7
alert ("Сранение null == 0  = " + (null==0) + "\nПотому что, значение null не относится ни к одному из типов,\nа образует свой отдельный тип, состоящий из единственного значения null");

//8
"use strict";

let money = 39150;  //  месячный бюджет
let profit = "фриланс"; //  дополнительный доход
let expenses = "питание, проезд, квартира";  // дополнительные траты
let purpose = 200000;    // желаемая сумма накоплений
let period = 26;    // период накоплений: 24 месяца 
let budgetDay = money/30;   //  дневной бюджет

let typeOfExpenses = expenses.length;   //  узнаем длину строки переменной expenses

let lowerCaseExpenses = expenses.toLowerCase(); //  приводим к нижнему регистру
let arrayLowerCaseExpenses = lowerCaseExpenses.split(' '); //   разбиваем строку на массив

console.log(typeof money, typeof profit);   // тип данных (money, profit)
console.log("Длина строки: " + expenses.length);    // Длина строки: expenses.length
console.log("Период равен " + (period) + " месяцев");   // Период равен period месяцев
console.log("Цель заработать " + (purpose) + " рублей");    //  Цель заработать purpose рублей
console.log(budgetDay); //  выводим дневной бюджет 
console.log(arrayLowerCaseExpenses)   // выводим массив


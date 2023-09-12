"use strict";

let money = 39150;  //  месячный бюджет
let profit = "фриланс"; //  дополнительный доход
let expenses = "питание, проезд, квартира";  // дополнительные траты
let purpose = 200000;    // желаемая сумма накоплений
let period = 26;    // период накоплений: 24 месяца 

let budgetDay = money/30;

let lenthOfExpenses = expenses.length;
let lenthOfProfit = profit.length;

console.log(money, profit);
console.log("Длина строки: " + expenses.length);

console.log("Период равен " + (period) + " месяцев");
console.log(budgetDay);

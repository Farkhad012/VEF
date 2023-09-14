"use strict";

// НАЧАЛО   ========================================================================================

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

//  3 ЗАДАНИЕ    ====================================================================================

//  1) Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
money = parseFloat(prompt("Ващ месячный доход?"));  

//  2) Спрашиваем у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную expenses (пример: "питание, проезд")
expenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");  
console.log(expenses.split(' '));

//  3) Спрашиваем у пользователя “Во сколько обойдуться обязательные статьи расходов?” и сохраните это в новую переменную amount
let amount = parseFloat(prompt("Во сколько обойдутся обязательные статьи расходов?"));

//  3) Спрашиваем у пользователя “Есть ли у вас вклад в банке?” и сохранить данные в новую  переменную deposit (булево значение true/false). Метод в помощь confirm()
let deposit = confirm("Есть ли у вас вклад в банке?");

//  4) Вычисляем бюджет на месяц, учитывая обязательные расходы, сохранить в новую переменную budgetMonth и вывести результат в консоль
let budgetMonth = money - amount;
console.log("Бюджет на месяц: " + budgetMonth);

//  5) Просим пользователя ввести желаемую сумму накоплений 
purpose = parseFloat(prompt("Введите желаемую сумму накоплений:"));

//  5) Зная budgetMonth, считаем за сколько месяцев будет достигнута цель purpose, вывести в консоль, округляя в большую сторону (методы объекта Math в помощь)
let monthToGoal = Math.ceil(purpose / budgetMonth);
console.log("Сумма будет достигнута через " + monthToGoal + " месяцев.");

//  6) Поправить budgetDay учитывая бюджет на месяц, а не месячный доход (уточнение: месячный доход за вычетом расходов). Вывести в консоль  округлив в меньшую сторону
budgetDay = Math.floor(budgetMonth / 30);
console.log(budgetDay);

if (budgetDay > 60000) {
    console.log("У вас высокий уровень дохода");
} else if (budgetDay > 30000 && budgetDay < 60000) {
    console.log("У вас средний уровень дохода");
} else if (budgetDay < 30000 && budgetDay > 0) {
    console.log("К сожалению у вас уровень дохода ниже среднего");
} else if (budgetDay < 0) {
    console.log("Что то пошло не так")
} else {
    console.log("Введите корректное значение бюджета")
};





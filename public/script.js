"use strict";
// Описание: Привет, TypeScript!
// Создайте переменную greeting типа string и присвойте ей значение "Hello, TypeScript!". Выведите значение переменной в консоль.
const greeting = 'Hello, TypeScript!';
console.log(greeting);
// Описание: Калькулятор суммы
// Напишите функцию mult, которая принимает два параметра типа number и возвращает их произведение.
function mult(a, b) {
    return a * b;
}
console.log(mult(10, 5));
// Описание: Проверка на четность
// Напишите функцию isEven, которая принимает число и возвращает true, если оно четное, и false, если нечетное.
function isEven(a) {
    return a % 2 === 0;
}
console.log(isEven(5));
console.log(isEven(6));
// Описание: Приветствие пользователя
// Напишите функцию greetUser, которая принимает имя пользователя и выводит приветствие.
function greetUser(userName) {
    return userName;
}
console.log(greetUser('Hello, ' + 'Iryna' + '!'));
// Описание: Фильтрация положительных чисел
// Создайте функцию filterPositiveNumbers, которая принимает массив чисел и возвращает новый массив, содержащий только положительные числа.
function filterPositiveNumbers(arrays) {
    const positiveNumbers = [];
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i] > 0) {
            positiveNumbers.push(arrays[i]);
        }
    }
    return positiveNumbers;
}
console.log(filterPositiveNumbers([1, -2, 3, -4, -5, 6, -7, 8, 9]));

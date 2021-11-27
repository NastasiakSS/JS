// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let value =[12,1,6]
// let min = value[0];
//
// value.forEach(function (element, index) {
//     if(index > 0){
//         if(min > element){
//             min=element
//         }
//     }
// })
//
// console.log(min)


// ===============================================================================================


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let value =[12,1,6]
// let min = value[0];
//
// value.forEach(function (element, index) {
//     if(index < 0){
//         if(min > element){
//             min=element
//         }
//     }
// })
//
// console.log(min)


// ===============================================================================================


// - створити функцію яка повертає найбільше число з масиву

// const maxNum = (array) => {
//     let max = array[0];
//     for (const maxElement of array) {
//         if (maxElement > max) max = maxElement;
//     }
//             return max;
// }
// const maxReturn = maxNum([10,20,30,45])
//
//
// console.log(maxReturn)


// ===============================================================================================

// - створити функцію яка повертає найменьше число з масиву

// const maxNum = (array) => {
//     let max = array[0];
//     for (const maxElement of array) {
//         if (maxElement < max) max = maxElement;
//     }
//     return max;
// }
// const maxReturn = maxNum([10,20,30,45])
//
//
// console.log(maxReturn)


// ===============================================================================================

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let calc =([a,b,c]) => a + b + c;
//
// console.log(calc([10,20,30]));


// ===============================================================================================

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

//
// const midNum = (array) => {
//   let mid = array[1];
//     for (const midElement of array) {
//         if (midElement === mid) mid = midElement;
//     }
//     return mid;
// }
// const midReturn = midNum([10,20,30]);
//
// console.log(midReturn)


// ===============================================================================================

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function fElement() {
//
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const funcElement of arguments){
//         if (funcElement > max) max = funcElement;
//         if (funcElement<min) min = funcElement;
//         {
//         }
//     }
//     console.log(max);
//     return min;
// }
//
// const min =fElement(123,20,75,30);
// console.log(min);
//


// ===============================================================================================

// - створити функцію яка заповнює масив рандомними числами

// function randomizer() {
//     let result = Math.round(Math.random()* 50);
//     return result;
// }
// for (let i = 0; i < 36; i++) {
//     console.log([randomizer(36)])
// }


// ===============================================================================================

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function randomizer() {
//     let result = Math.round(Math.random()* 100)
// return result;
// }
//
// for (let i = 0; i < 100; i++) {
// document.write(`<div>${randomizer(100)}</div>`)
// }


// ===============================================================================================

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomizer(limit) {
//     let result = Math.round(Math.random() * limit)
//     return result;
// }
// for (let i = 0; i < 100; i++) {
// console.log([randomizer(100)])
// }


// ===============================================================================================

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reverse(array) {
//     let rev = [];
//     for (let i = array.length; i > 0; i--) {
//         rev.push(array.pop())
//     }
//     return rev;
// }
// console.log(reverse([1,2,3,4]));
// let a = [1, 2, 3, 4];
// console.log('a', a);

// ===============================================================================================



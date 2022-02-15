//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

/*function compNumMin(a,b,c){
    if (a<b && a<c){
        min = a;
    }else if (b<a && b<c){
        min = b;
    }else {
        min = c;
    }
    console.log(min);
}

compNumMin(45,16,43);*/

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

/*function compNumMax(a,b,c){
    if (a > b && a > c){
        max = a;
    }else if (b>c && b>a){
        max = b;
    }else {
        max = c;
    }
    console.log(max);
}

compNumMax(55,44,67);
console.log();*/

// - створити функцію яка повертає найбільше число з масиву

/*function mas(arr){
    let max = arr[0];
    for (let item of arr) {
        if (item > max){
            max = item;
        }
    }
    return max;
}
let arr= mas([23,56,34]);
let arr1 = arr;
console.log(arr1);*/

// - створити функцію яка повертає найменьше число з масиву

/*function mas(arr){
    let min = arr[0];
    for (let item of arr) {
        if (item < min){
            min = item;
        }
            }
    return min;
}
let arr= mas([23,56,34]);
let arr1 = arr;
console.log(arr1);*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


/*function sumArray(arr) {
    let sum = 0;
    for (let element of arr) {
        sum = element+sum;
    }
    return sum;
            }
let xxx = sumArray([23, 45, 66, 11]);
let sammery  = xxx;
console.log(xxx);*/

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

/*function middle(arr) {
    let md = 0;
    for (let num of arr) {
        md = num + md;
    }
    let result = md / arr.length;
    return result;
}

let xxx = middle([23, 45, 66, 11]);
console.log(xxx);*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

/*function minMax(arg) {
    let min = arguments[0];
    let max = arguments[0];
    for (let num of arguments) {
        if (num > max) {
            max = num;
        } if (num < min) {
            min = num;
        }
            }
    console.log(max);
    return min;
}

let xxx = minMax(23,67,11);
let result = xxx;
document.write(`<div>${xxx}</div>`);*/



// - створити функцію яка заповнює масив рандомними числами

/*function arrCreator(length){
    let newArray = [];
    for (let i = 0; i < length; i++) {
        newArray.push(Math.round(Math.random()*100));
    }
    return newArray;
}

let xxx = arrCreator(10);
console.log(xxx);*/

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

/*function arrCreator(length, limit){
    let mas = [];
    for (let i = 0; i < length; i++) {
        mas.push(Math.round(Math.random()*limit));
    }
    return mas;
}

let xxx = arrCreator(10, 97);
console.log(xxx);*/

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

/*
function reverseArray(arr){
    let newArray = [];
    for (i = arr.length - 1, ri = 0; i>=0;  i--, ri++){
        newArray[ri] = arr[i];
    }
    return newArray;
}

let xxx = reverseArray([1,2,3]);
console.log(xxx);*/

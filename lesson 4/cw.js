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

function middle(arr){
    let md;
    for (let num of arr) {
        md = num+md;
    }
    let result = md/arr.length;
    console.log(result);
    return result;
}

let xxx = middle([23, 45, 66, 11]);

let md = org;
console.log(org);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
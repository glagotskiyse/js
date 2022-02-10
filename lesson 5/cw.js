//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

/*let maxMin = (a,b,c) => {
    if (a<b && a<c){
        min = a;
    }else if (b<a && b<c){
        min = b;
    }else {
        min = c;
    }
    return min;
}

let xxx = maxMin(45,23,12);
console.log(xxx);*/

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

/*let minMax = (a, b, c) => {
    if (a > b && a > c) {
        max = a;
    } else if (b > a && b > c) {
        max = b;
    } else {
        max = c;
    }
    return max;
}

let xxx = minMax(45,23,78);
console.log(xxx);*/

// - створити функцію яка повертає найбільше число з масиву

/*let maxNum = (arr) => {
    let max = arr[0];
    for (let element of arr) {
        if (element > max) {
            max = element;
        }
    }
    return max;
}

let xxx = maxNum([34, 67, 21]);
console.log(xxx);*/

// - створити функцію яка повертає найменьше число з масиву

/*let minNum = (arr)=>{
    let min = arr[1];
    for (let element of arr) {
        if (element<min){
            min = element;
        }
    }
    return min;
}

let xxx = minNum([456,234,87,234,567,907]);
console.log(xxx);*/

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

/*let summary = (arr) =>{
    let sum = 0;
    for (let element of arr) {
        sum = element+sum;
    }
    return sum;
}

let xxx = summary([34,56,78,96]);
console.log(xxx);*/

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

/*let middle = (arr)=>{
    let sum = 0;
    for (let num of arr) {
        sum = num+sum;
    }
    return sum/arr.length;
}


let xxx = middle([34,234,865,345,23]);
console.log(xxx);*/

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

/*let abrakadabra = (...ppc)=>{
    let min = ppc[0];
    let max = ppc[1];
    for (let num of ppc) {
        if (num<min){
            min = num;
        }else if (num>max){
            max = num;
            document.write(`<div><p>Найбільше число - ${max}</p></div>`);
        }
    }
    return min;
}

let xxx = abrakadabra(12,3434,12323,45,232,1,490);
document.write(`<div><p>Найменше число - ${xxx}</p></div>`);*/

// - створити функцію яка заповнює масив рандомними числами

// let arrCreator = (counter)=>{
//     let mas = [];
//     for (let i = 0; i < counter.length; i++) {
//         let element = counter[i];
//         mas =
//     }
//     }
// }

// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
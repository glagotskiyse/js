//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

/*function sRectangle(a,b){
    return a*b;
}
let foo = sRectangle(2,4);
console.log(foo);*/

// - створити функцію яка обчислює та повертає площу кола з радіусом r

/*function sCircle(r){
    return 3.14*(r**2);
}

let xxx = sCircle(5);
console.log(xxx);*/

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

/*function sCylinder(h,r){
    return 2*3.14*r*h;
}

let xxx = sCylinder(6,3);
console.log(xxx);*/

// - створити функцію яка приймає масив та виводить кожен його елемент

/*
function mas(arguments){
    for (let argument of arguments) {
        console.log(argument)
    }
}

let xxx = mas([2,3,6,5]);
*/

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

/*function parCreator(test) {

    document.write(`<p>${test}</p>`)

}

let someText = parCreator(`Lorem ipsum dolor sit amet.`);*/

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*function liCreator(message){
    document.write(`<ul>`);
        document.write(`<li>${message}</li>`);
        document.write(`<li>${message}</li>`);
        document.write(`<li>${message}</li>`);
    document.write(`</ul>`);
}

let msg = liCreator(`test`);*/


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*function liCreatorNum(message,num){
    document.write(`<ul>`);
    for (let i = 0; i < num; i++) {
        document.write(`<li>${message}</li>`);
    }
    document.write(`</ul>`);
}

let list = liCreatorNum(`text`,3);*/


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

/*let rand = masToList(23,`458`, true);

function masToList(...mas){
    document.write(`<ul>`);
    for (let item of mas) {
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
}*/

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/*
let arr = docCreator([{id: 28993, name: `vasya`, age: 29}, {id: 2345, name: `olya`, age: 30}]);

function docCreator(arr){
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        document.write(`<div>${item.id} ${item.name} ${item.age}</div>`)
        }
    }*/

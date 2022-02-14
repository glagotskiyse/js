//Всі функції повинні бути описані стрілочним типом!!!!
// - створити функцію яка обчислює та повертає площу прямокутника

/*let sRectangle = (a,b)=>a*b;

let xxx = sRectangle(4,5);
console.log(xxx);*/


// - створити функцію яка обчислює та повертає площу кола

/*let sCircle = (r) => 3.14*r**2;

let xxx = sCircle(5);
console.log(xxx);*/

// - створити функцію яка обчислює та повертає площу циліндру

/*let sCylinder = (r,h)=>3.14*r*h;

let xxx = sCylinder(5,8);
console.log(xxx);*/

// - створити функцію яка приймає масив та виводить кожен його елемент

/*let arrayDisp = (arr) => {
    for (let element of arr) {
        console.log(element);
    }
}

let xxx = arrayDisp([45,65,234,576]);*/

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

/*let paragCreator = (text)=>document.write(`<div><p>${text}</p></div>`);

let xxx = paragCreator(`Просто параграф!`);*/

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

/*let listCreator = (text)=>{
    document.write(`<div><ul></div>`)
    document.write(`<div><li>${text}</li></div>`)
    document.write(`<div><li>${text}</li></div>`)
    document.write(`<div><li>${text}</li></div>`)
    document.write(`<div></ul></div>`)
}

let xxx = listCreator('список');*/

// - створити функцію яка  створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

/*let listCreatorCounter = (text,counter)=>{
    document.write(`<div><ul></div>`)
    for (i=0; i<counter;i++){
        document.write(`<div><li>${text}</li></div>`)
    }
    document.write(`<div></ul></div>`)
}

let xxx = listCreatorCounter('список',3);*/


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

/*let listCreatorArray = (arr)=>{
    for (let element of arr) {
        document.write(`<div><li>${element}</li></div>`);
    }
    }

    let xxx = listCreatorArray([34,true,`proba`]);*/

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

/*let objCreator = (arr)=>{
    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
        document.write(`<div>${element.id} ${element.name} ${element.age}</div>`);
    }
}

let xxx = objCreator([{id:1,name:`Serg`,age:29},{id:2,name:`Olya`,age:30},{id:3,name:`Roman`,age:28}]);*/

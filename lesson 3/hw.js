//--створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
/*{
let xxx = [4,5,6,7,8,`a`,`b`,`c`,`d`,`f`,[`xxx`,`yyy`,`zzz`,22,33,true]];
for (let temp of xxx){
console.log(temp);
}
}*/
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//

/*let arr = [];
arr[0] = 23;
arr[1] = 33;
arr[2] = 12;
arr[3] = true;
arr[4] = `block`;
console.log(arr);*/
// for (let temp of arr){ //не зрозумів, чи масив вивести чи кожний елемент, можно розкоментувати
// console.log(temp);
// }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

/*let arr = [];
arr[0] = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, soluta?`;
arr[1] = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dicta eligendi molestiae nihil quis sit.`;
arr[2] = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, cum ea eum explicabo facilis fugiat molestias neque quae quibusdam quidem sequi ut! Sapiente soluta, voluptatum? Aspernatur cum est nobis quo.`
arr[3] = `Lorem ipsum dolor sit amet, consectetur.`;
arr[4] = `Lorem ipsum dolor sit amet, consectetur adipisicing.`;
arr[5] = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam?`;
arr[6] = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`;
arr[7] = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum natus, odio praesentium repellat tempora vitae.`;
arr[8] = `Lorem ipsum dolor sit.`;
arr[9] = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum natus, odio praesentium repellat tempora vitae.`;

    document.write(`<div>`)
for (let temp of arr){
    document.write(`<div class="xxx">${temp}</div>`)
}
    document.write(`</div>`)*/

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

/*let arr = [];
arr[0] = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non, soluta?`;
arr[1] = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dicta eligendi molestiae nihil quis sit.`;
arr[2] = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, cum ea eum explicabo facilis fugiat molestias neque quae quibusdam quidem sequi ut! Sapiente soluta, voluptatum? Aspernatur cum est nobis quo.`
arr[3] = `Lorem ipsum dolor sit amet, consectetur.`;
arr[4] = `Lorem ipsum dolor sit amet, consectetur adipisicing.`;
arr[5] = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam?`;
arr[6] = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`;
arr[7] = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum natus, odio praesentium repellat tempora vitae.`;
arr[8] = `Lorem ipsum dolor sit.`;
arr[9] = `Lorem ipsum.`

    for (let i = 0; i < arr.length; i++) {
        let element = arr[i];
    document.write(`<div class="xxx">${element} - index - ${[i]}</div>`);
}
document.write(`</div>`);*/

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

/*let i = 0;
while (i<19){
    document.write(`<div class="test"><h1>test</h1></div>`);
    i++;
}*/

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//

/*let i = 0;
while (i<19){
    document.write(`<div class="test"><h1>test - ${i}</h1></div>`);
    i++;
}*/

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

/*let numbers = [34,56,877,23,677,445,90,12,3467,44];
for (let number of numbers) {
console.log(number);
}*/

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

/*let letters = [`aba`,`drop`,`doc`,`long`,`ddos`,`shirt`,`look`,`can`,`friend`,`tor`];
for (let letter of letters) {
    console.log(letter);
}*/

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

/*let all = [10,`ooo`,true,23,`solt`,89,false,`duck`,323,` `];
for (let element of all) {
    console.log(element);

}*/

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

/*let arr = [10,`ooo`,true,23,`solt`,89,false,`duck`,323,` `];
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (typeof element === `boolean`){
        console.log(element);
    }

}*/

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

/*let arr = [10,`ooo`,true,23,`solt`,89,false,`duck`,323,` `];
for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    if (typeof element === `number`){
        console.log(element);
    }

}*/

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи


//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
//

/*let arr = [];
arr[0] = 10;
arr[1] = true;
arr[2] = `ada`;
arr[3] = false;
arr[4] = `sfgfg`;
arr[5] = 89;
arr[6] = `vsdvsv`;
arr[7] = 66;
arr[8] = `uiouio`;
arr[9] = 10;
arr[10] = 234;

for (let i = 0; i < 1; i++) {
    let element = arr[i];
    console.log(arr);
}*/

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

/*let arr = [];
for (let i = 0; i < 9; i++) {
    const element = arr[i];
    document.write(`<div>${i+1}</div>`);
    console.log((i+1));
}*/

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

/*let array = [];
for (let i = 0; i < 99; i++) {
    const element = array[i];
    document.write(`<div>${i+1}</div>`)
    console.log((i+1));
}*/

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

/*let array = [];
for (let i = 0; i < 99; i+=2) {
    const element = array[i];
    document.write(`<div>${(i/2)+1}</div>`);
    console.log((i/2)+1);
}*/

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

/*let array = [];
for (let i = 0; i < 99; i++) {
    const element = array[i];
    if (i>0 && i%2 === 0){
    document.write(`<div>${i}</div>`);
    console.log(i);
    }
}*/

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
/*let array = [];
for (let i = 0; i < 99; i++) {
    const element = array[i];
    if (i>0 && i%2 !== 0){
        document.write(`<div>${i}</div>`);
        console.log(i);
    }
}*/

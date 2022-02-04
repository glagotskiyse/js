// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
//
/*{
    let time = prompt(`time?`);
    if (time < 15) {
        console.log(`first`);
    } else if (time < 30) {
        console.log(`second`)
    } else if (time < 45) {
        console.log(`third`)
    } else if (time < 60) {
        console.log(`fourth`)
    }
}*/
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
/*let day = prompt(`Який день в місяці(число)?`);

if (day < 1){
    console.log(`Читай уважніше!!!`);
}
else if (day >= 1 && day < 10){
    console.log(`first`);
}
else if (day >= 10 && day < 20){
    console.log(`second`);
}
else if (day >= 20 && day <= 31){
    console.log(`third`);
}
else if (day > 31){
    console.log(`Читай уважніше!!!`)
}*/
//- У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
/*{
    let test;
    if (confirm(`Угадай?`)){
        test = 'Вірно';
    }
    else {
        test = 'Неправильно';
    }
    console.log(test);

}*/
/*    let test = confirm(`???`) ? `Вірно`:'Неправильно';
    console.log(test);*/
// Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
/*
{
let a = prompt(`??`);
if (a == 1) {
    console.log(`Вірно`);
} else if (a == 0) {
    console.log(`Невірно`);
} else if (a == -3) {
    console.log(`Вірно`);
}
}*/
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
/*
{
    let day = prompt(`Введіть порядковий номер дня тижня`);

    switch (day) {
        case `1`:
            document.write('7:00 Підйом');
            document.write(`8:00 Сніданок`)
            document.write(`8:00-9:00 Подорож в офіс:)`)
            document.write('9:00 В офісі');
            document.write('12:00-13:00 Обід');
            document.write('18:00 Подорож додому');
            document.write(`20:00 Okten`)
            document.write(`23:00 Сон`)
            break;
        case `2`:
            document.write('7:00 Підйом');
            document.write(`8:00 Сніданок`)
            document.write(`8:00-9:00 Подорож в офіс:)`)
            document.write('9:00 В офісі');
            document.write('18:00 Подорож в зал');
            document.write('23:00 Сон');
            break;
        case `3`:
            document.write('7:00 Підйом');
            document.write(`8:00 Сніданок`)
            document.write(`8:00-9:00 Подорож в офіс:)`)
            document.write('9:00 В офісі');
            document.write('12:00-13:00 Обід');
            document.write('18:00 Подорож додому');
            document.write(`20:00 Okten`)
            document.write(`23:00 Сон`)
            break;
        case `2`:
            document.write('7:00 Підйом');
            document.write(`8:00 Сніданок`)
            document.write(`8:00-9:00 Подорож в офіс:)`)
            document.write('9:00 В офісі');
            document.write('18:00 Подорож в зал');
            document.write('23:00 Сон');
            break;
        case `5`:
            document.write('7:00 Підйом');
            document.write(`8:00 Сніданок`)
            document.write(`8:00-9:00 Подорож в офіс:)`)
            document.write('9:00 В офісі');
            document.write('12:00-13:00 Обід');
            document.write('18:00 Подорож додому');
            document.write(`20:00 Okten`)
            document.write(`23:00 Сон`)
            break;
        case `6`:
            document.write('Відпочинок');
            break;
        case `7`:
            document.write('Відпочинок');
            break;
    }
}*/
//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
/*{
let year = prompt(`Введіть рік`);
if (Number.isInteger(year/4)){
    console.log(`Ok`)
}
}*/
//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
/*
{
let jsName = prompt(`Яка «офіційна» назва JavaScript?`);
if (jsName === `ECMAScript`){
    console.log(`Правильно!`);
}
else if (jsName !== `ECMAScript`){
    console.log(`Не знаєте? ECMAScript!`);
}
}*/

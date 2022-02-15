//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'

/*let a = 'hello world';
console.log(a.length);

let b = 'lorem ipsum';
console.log(b.length);

let c = 'javascript is cool';
console.log(c.length);*/

// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

/*let a = 'hello world';
console.log(a.toUpperCase());

let b = 'lorem ipsum';
console.log(b.toUpperCase());

let c = 'javascript is cool';
console.log(c.toUpperCase());*/

// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

/*let a = 'HELLO WORLD';
console.log(a.toLowerCase());

let b = 'LOREM IPSUM';
console.log(b.toLowerCase());

let c = 'JAVASCRIPT IS COOL';
console.log(c.toLowerCase());*/

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
//

/*let str = ' dirty string   ';
console.log(str.substring(1,13));*/

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//

/*let str = 'Каждый охотник желает знать';
let arr = str.split(' ');
document.writeln(arr);*/

//
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый
//

/*    let str = 'Каждый охотник желает знать';
    document.writeln(delete_characters(str, 7)); // Каждый*/

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

/*let str = "HTML JavaScript PHP";
   function insert_dash(str) {
       str = str
           .replaceAll(' ', '-')
           .toUpperCase();
       return str;
   }

document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'*/


//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
//
//

let str = 'каждый охотник желает знать';





//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

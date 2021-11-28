// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world';
// console.log('hello world',str.length)
// let str1 = 'lorem ipsum';
// console.log('lorem ipsum',str1.length)
// let str2 = 'javascript is cool';
// console.log('javascript is cool',str2.length)

// ===============================================================================================


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = ('hello world')
// let s = str.concat(' lorem ipsum','java script is cool');
// let toUpperCase = s.toUpperCase();
// console.log(toUpperCase)
//


// ===============================================================================================


// - Перевести до нижнього регістру наступні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'


// let str = ('HELLO WORLD')
// let s = str.concat(' LOREM IPSUM','JAVASCRIPT IS COOL');
// let toLowerCase = s.toLowerCase();
// console.log(toLowerCase)
//


// ===============================================================================================


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let trim = str.trim();
// console.log(trim)


// ===============================================================================================


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

//     let str = 'Каждый охотник желает знать';
//    function strigToarray(str) {
//       let arr = str.split(``);
//       return arr;
//    }
// document.writeln(strigToarray(str));


// ===============================================================================================


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

// let str = 'Каждый охотник желает знать';
//
// function delete_characters(str, length){
//     let substring = str.substring(0,length);
//     return substring
// }
// document.writeln(delete_characters(str, 7))


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let str = "HTML JavaScript PHP";
//
// function insert_dash(str){
// return str.trim().toUpperCase().replaceAll("","-")
// }
// document.writeln(insert_dash(str))


// ===============================================================================================


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.


// let str = ("hello okten")
//
// function upper(str){
//     let s = str.charAt(0)
//         .toUpperCase()
//         + str.slice(1);
//     return s;
// }
// document.writeln(upper(str))



// ===============================================================================================


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = ("hello okten")
//
// function capitalize(str) {
//     let replace = str.replace(/(^|\s)\S/g ,function (a) { return a.toUpperCase()
//     })
//     return replace
// }
// document.writeln(capitalize(str));

// ===============================================================================================

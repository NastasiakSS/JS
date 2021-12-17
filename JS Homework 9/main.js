// Все робити за допомоги js.

// - створити блок,

// let divElement = document.createElement(`div`);
// divElement.innerText = `Hello`;

//     - додати йому класи wrap, collapse, alpha, beta

// divElement.classList.add(`wrap`);
// divElement.classList.add(`collapse`);
// divElement.classList.add(`alpha`);
// divElement.classList.add(`beta`);

// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

// divElement.style.background=`silver`;
// divElement.style.color=`red`;
// divElement.style.fontSize=`40px`;
// divElement.style.textAlign=`center`;
// - додати цей блок в body.

// document.body.appendChild(divElement);

// - клонувати його повністю, та додати клон в body.

// let divElementClone = divElement.cloneNode(true);
// document.body.appendChild(divElementClone)

// ===============================================================================


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.


// let container = document.getElementsByClassName(`menu`)[0];
//
// let scriptArr = ['Main','Products','About us','Contacts'];
//
// for (const script of scriptArr) {
//
//     let scriptLi = document.createElement(`li`)
//  scriptLi.innerText = `okten`
//     container.appendChild(scriptLi);
// }




// ===============================================================================


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// for (const container of coursesAndDurationArray) {
//     let divElement = document.createElement(`div`)
//     divElement.innerText =`${container.title}`+`${container.monthDuration}`;
//     document.body.appendChild(divElement)
// }


// ===============================================================================


// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// for (const container of coursesAndDurationArray) {
//     let div = document.createElement(`div`);
//     div.classList.add(`item`);
//
//
//     let h1 = document.createElement(`h1`);
//     h1.classList.add(`heading`);
//     h1.innerText = container.title;
//
//
//     let p = document.createElement(`p`);
//     p.classList.add(`description`);
//     p.innerText = container.monthDuration;
//
//
//     document.body.appendChild(div)
//     document.body.appendChild(h1)
//     document.body.appendChild(p)
//
// }
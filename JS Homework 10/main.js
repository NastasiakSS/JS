// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".


// let info = document.getElementById(`text`)
// let click = document.getElementById(`click`)
// click.onclick = function (){
//     info.style.display = `none`;
// }




//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.getElementById(`click`)
// button.style.height=`35px`
// button.style.width=`70px`
// button.onclick=function (){
//     button.style.display = `none`;
//
// }



// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача



// document.getElementById(`btn`).onclick = function() {
//     let age = document.getElementById(`age`).value;
//
//     if (!age){
//         alert(`Ohh,nothing))`);
//
//     }else if (+age < 18)
//     {
//         alert(`Ohh,nooo`);
//
//     }else{
//         alert(`Yesss!!`);
//     }
// }


// - Создайте меню, которое раскрывается/сворачивается при клике

// let button = document.getElementById(`btn`)
// let prr = true;
// button.style.width = `70px`
// button.style.height = `35px`
// button.innerText = `Save`
// btn.onclick = function (){
//     if (prr) {
//         document.getElementById(`menu`).style.display = `none`
//
//     }else {
//         document.getElementById(`menu`).style.display = `block`
//     }
// prr = !prr
// };



// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
//

// let comment =[
//     {name:`Svyatoslav`, age:`16`},
//     {name:`Ruslan`, age:`48`},
//     {name:`Ivan`, age:`16`},
//     {name:`Vasya`, age:`32`},
//     {name:`Antoha`, age:`22`}
// ];
//
// let divEl = document.createElement(`div`)
// for (const person of comment) {
//     let div = document.createElement(`div`);
//     div.classList.add(`menu`)
//     let h4 = document.createElement(`h4`);
//     let p = document.createElement(`p`);
//     let btn = document.createElement(`button`);
//
//
//     h4.innerText = person.name;
//     p.innerText = person.age;
//     btn.innerText = `Closed`
//
//     btn.onclick = function (){
//         p.classList.add('pHidden');
//     }
//     div.append(h4, p, btn);
//     divEl.appendChild(div)
// }
// document.body.appendChild(divEl)
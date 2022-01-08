// -створити форму з інпутами для name та age.
//При відправці форми записати об'єкт в localstorage


// let name = document.forms.user.name;
// let age = document.forms.user.age;
// let btn = document.getElementById(`btn`)
// let key = `key`;
//
// let send = function (userName, userAge) {
//     let users = {
//         name: userName,
//         age: userAge
//     };
//     localStorage.setItem(key, JSON.stringify(users));
// }
//
// btn.onclick = function (){
//     send(name.value, age.value);
// }


//=========================================================================


// -створити форму з інпутами model,type та volume для автівки.
//при відправці форми об'єкти зберігаються в масиві в локальному сховищі

// let model = document.forms.car.model;
// let type = document.forms.car.type;
// let volume = document.forms.car.volume;
// let btn = document.getElementById(`btn`)
// let key = `carKey`;
//
// let cars = function (modelCar, typeCar, volumeCar)  {
//     let newArray = JSON.parse(localStorage.getItem(key)) || [];
//
//     newArray.push({modelCar,typeCar,volumeCar})
//     localStorage.setItem(key, JSON.stringify(newArray));
// }
//
// btn.onclick = function (){
//     cars(model.value, type.value, volume.value);
// }

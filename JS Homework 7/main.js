// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone

// function User(id, name, surname, email, phone) {
//     this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }

// - створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }
//
// const users = [
// new User(21,`Svyatoslaw`,`Nastosiak`,`nastasiak.sss@gmail.com`,380681212340),
// new User(12,`Ruslan`,`Nastosiak`,`nastasiakR@gmail.com`,380681212341),
// new User(2,`Stepan`,`Andrev`,`Sandrev@gmail.com`,380681212342),
// new User(1,`Ivan`,`Sopko`,`Sopkoi@gmail.com`,380681212343),
// new User(23,`Marta`,`Ivanova`,`IvaMarta@gmail.com`,380681212344),
// new User(14,`Yulia`,`Rurkova`,`yulichka1342@gmail.com`,380681212345),
// new User(56,`Anastasia`,`Stepovaya`,`Anastas221@gmail.com`,380681212346),
// new User(685,`Viktor`,`Hruch`,`ViktorHruch@gmail.com`,380681212347),
// new User(2767,`Vitaliy`,`Petrov`,`Vpetrov21@gmail.com`,380681212348),
// new User(29,`Andriy`,`Mapenko`,`MapAndriy@gmail.com`,380681212349)
// ];
// console.log(users);


// =========================================================================


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

//
// function User(id, name, surname, email, phone) {
//     this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }
//
// const users = [
//     new User(21,`Svyatoslaw`,`Nastosiak`,`nastasiak.sss@gmail.com`,380681212340),
//     new User(12,`Ruslan`,`Nastosiak`,`nastasiakR@gmail.com`,380681212341),
//     new User(2,`Stepan`,`Andrev`,`Sandrev@gmail.com`,380681212342),
//     new User(1,`Ivan`,`Sopko`,`Sopkoi@gmail.com`,380681212343),
//     new User(23,`Marta`,`Ivanova`,`IvaMarta@gmail.com`,380681212344),
//     new User(14,`Yulia`,`Rurkova`,`yulichka1342@gmail.com`,380681212345),
//     new User(56,`Anastasia`,`Stepovaya`,`Anastas221@gmail.com`,380681212346),
//     new User(685,`Viktor`,`Hruch`,`ViktorHruch@gmail.com`,380681212347),
//     new User(2767,`Vitaliy`,`Petrov`,`Vpetrov21@gmail.com`,380681212348),
//     new User(29,`Andriy`,`Mapenko`,`MapAndriy@gmail.com`,380681212349)
// ];
//
//
//
// let filterUser = users.filter((item) => {
//   if (item.id%2 === 0){
//       return item
//   }
// })
//
// console.log(filterUser)





// ===============================================================================================


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

//
//
// function User(id, name, surname, email, phone) {
//     this.id = id,
//         this.name = name,
//         this.surname = surname,
//         this.email = email,
//         this.phone = phone
// }
//
// const users = [
//     new User(21,`Svyatoslaw`,`Nastosiak`,`nastasiak.sss@gmail.com`,380681212340),
//     new User(12,`Ruslan`,`Nastosiak`,`nastasiakR@gmail.com`,380681212341),
//     new User(2,`Stepan`,`Andrev`,`Sandrev@gmail.com`,380681212342),
//     new User(1,`Ivan`,`Sopko`,`Sopkoi@gmail.com`,380681212343),
//     new User(23,`Marta`,`Ivanova`,`IvaMarta@gmail.com`,380681212344),
//     new User(14,`Yulia`,`Rurkova`,`yulichka1342@gmail.com`,380681212345),
//     new User(56,`Anastasia`,`Stepovaya`,`Anastas221@gmail.com`,380681212346),
//     new User(685,`Viktor`,`Hruch`,`ViktorHruch@gmail.com`,380681212347),
//     new User(2767,`Vitaliy`,`Petrov`,`Vpetrov21@gmail.com`,380681212348),
//     new User(29,`Andriy`,`Mapenko`,`MapAndriy@gmail.com`,380681212349)
// ];
// users.sort((a, b) => a.id - b.id);
// console.log(users);
//

// ===============================================================================================


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
// constructor(id,name,surname,email,phone,order) {
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
//     this.order=order;
// }}
//
// let user = new Client()
//     console.log(user)
//
//
//

// ===============================================================================================


// створити пустий масив, наповнити його 10 об'єктами Client

// class Client {
// constructor(id,name,surname,email,phone,order) {
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
//     this.order=order;
// }}
//
// let user = new Client()
//
//
// const clientArray = [
//     new Client(1,`Svyatoslaw`,`Nastosiak`,`nastosiak.sss@gmail.com`,380681836562,[`glases`,`smartphone`,`laptop`]),
//     new Client(2,`Ruslan`,`Nastosiak`,`nastosiak.rrr@gmail.com`,380671231212,[`book`,`beer`,`pen`]),
//     new Client(3,`Svyatoslaw`,`Nastosiak`,`nastosiak.sss@gmail.com`,380681836562,[`glases`,`smartphone`,`laptop`]),
//     new Client(4,`Svyatoslaw`,`Nastosiak`,`nastosiak.sss@gmail.com`,380681836562,[`glases`,`smartphone`,`laptop`]),
//     new Client(5,`Svyatoslaw`,`Nastosiak`,`nastosiak.sss@gmail.com`,380681836562,[`glases`,`smartphone`,`laptop`]),
//     new Client(6,`Svyatoslaw`,`Nastosiak`,`nastosiak.sss@gmail.com`,380681836562,[`glases`,`smartphone`,`laptop`]),
//     new Client(7,`Svyatoslaw`,`Nastosiak`,`nastosiak.sss@gmail.com`,380681836562,[`glases`,`smartphone`,`laptop`]),
//     new Client(8,`Svyatoslaw`,`Nastosiak`,`nastosiak.sss@gmail.com`,380681836562,[`glases`,`smartphone`,`laptop`]),
//     new Client(9,`Svyatoslaw`,`Nastosiak`,`nastosiak.sss@gmail.com`,380681836562,[`glases`,`smartphone`,`laptop`]),
//     new Client(10,`Svyatoslaw`,`Nastosiak`,`nastosiak.sss@gmail.com`,380681836562,[`glases`,`smartphone`,`laptop`]),
// ];
// console.log(clientArray);

// ===============================================================================================


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

//
// class Client {
// constructor(id,name,surname,email,phone,order) {
//     this.id=id;
//     this.name=name;
//     this.surname=surname;
//     this.email=email;
//     this.phone=phone;
//     this.order=order;
// }}
//
// let user = new Client()
//
//
// const clientArray = [
//     new Client(1,`Svyatoslaw`,`Nastosiak`,`nastosiak.sss@gmail.com`,380681836562,[`glases`,`smartphone`,`laptop`]),
//     new Client(2,`Ruslan`,`Nastosiak`,`nastosiak.rrr@gmail.com`,380671231212,[`book`,`beer`,`pen`]),
//     new Client(3,`Stepan`,`Stepanov`,`ss@gmail.com`,380681812334,[`glases`,`smartphone`]),
//     new Client(4,`Volodia`,`Lupov`,`vl@gmail.com`,380638952394,[`glases`,`laptop`]),
//     new Client(5,`Ivan`,`Petrov`,`ip@gmail.com`,380681235678,[`smartphone`,]),
//     new Client(6,`Iryna`,`Klipova`,`ik@gmail.com`,380652121122,[`glases`,`book`,`laptop`]),
//     new Client(7,`Liuda`,`Nastosiak`,`ln@gmail.com`,380665542132,[`laptop`]),
//     new Client(8,`Alyona`,`Stepova`,`as@gmail.com`,380675432211,[`glases`]),
//     new Client(9,`Vitaliy`,`Nastosiak`,`vn@gmail.com`,380681836562,[`car`,`smartphone`]),
//     new Client(10,`Viktoria`,`Pupkina`,`vp@gmail.com`,380698765431,[`glases`,`smartphone`,`laptop`]),
// ];
// console.log(clientArray);
//
// let sortClient = clientArray.sort((a,b)=> a.order.length - b.order.length);
// console.log(sortClient);
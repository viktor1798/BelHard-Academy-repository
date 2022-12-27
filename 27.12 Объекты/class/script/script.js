// Созднание объекта

//person = new Object(); // пустой объект создан при помощи конструктора

//person={};  // пустой объект

// let person = {
//     firstName : "Sasha",
//     lastName: "Petrov",
//     id: 5566,

//     fullInfo:()=>{
//         //this - ссылается на владельца метода, то есть родителя, то есть объект person
//         return alert(`name: ${this.firstName}, lastname: ${this.lastName}, id:${this.id}`) // метод объекта person
//     }
// }

//person.fullInfo(); // обращение к методу



//

person={};

person.age = 18;
person.firstName = "Igor";
console.log(person.firstName, person.age , person);
delete person.age;

//просмотро содержимого в Объекте person
if ("firstName" in person){
    console.log("существует");
}else console.log("не существует");

//доступ через квадратные скобки []

person["firstName"]="Petya";

console.log(person["firstName"])

// доступ к свойству объекта через переменную

person.age = 30;

let key = "age";

console.log(person[key]);
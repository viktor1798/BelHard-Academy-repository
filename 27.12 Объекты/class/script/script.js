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





// person={};

// person.age = 18;
// person.firstName = "Igor";
// console.log(person.firstName, person.age , person);
// delete person.age;

// //просмотро содержимого в Объекте person
// if ("firstName" in person){
//     console.log("существует");
// }else console.log("не существует");

// //доступ через квадратные скобки []

// person["firstName"]="Petya";

// console.log(person["firstName"])

// // доступ к свойству объекта через переменную

// person.age = 30;

// let key = "age";

// console.log(person[key]);


// перебор объекта

// let menu={
//     width:300,
//     heigth:200,
//     title:"Blabla",
// }

// for (let key in menu) {
//     alert(`${key}:${menu[key]}`);
// }

// копия объекта (зависимая копия), передача по ссылке

// let user={
//     name:"Oleg",
// }

// let admin = user;

// admin.name = "kolya";

// console.log(user.name)

// //независимая копия объекта (клонирование объекта)
// let newUser={
//     name:"Olya",
//     age:32,
//     heigth:165,
// }

// let clone ={}

// for (let key in newUser) {
//     clone[key]= newUser[key];
// }
// newUser.name = 'Grisha'
// clone.name = 'Senya'
// console.log(clone);
// console.log(newUser);





//повторение методов Math

//Рандомные велечины

//1 step (случайное от 0 до 1)

// let r=Math.random()
// console.log(r);

// //2 step (случайное до макс числа)
// const MAX= 5;

// let result = MAX *r;
// console.log(result);

// //3 step (округление, метод round)

// let result1 = Math.round(result);
// console.log(result1);

// //округление с методом floor

// let result2=Math.floor(result); //округление в меньшую сторону

// console.log(result2)

// //округление в большую сторону с методом ceil

// let result3 = Math.ceil(result);

// console.log(result3);

// let cities = ["Pinsk", "Orsha", "Lepel", "Gorky", "Zhlobin"]
// const maxC = cities.length

// let r = Math.floor(Math.random()*maxC)

// console.log(cities[r])

//случайный цвет

let symbol = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
let color ="";
for(let i =1; i<=6;i++){
    let maxP = symbol.length;
    let r =Math.floor(Math.random()*maxP)


    color+= symbol[r]
}

console.log(`#${color}`)
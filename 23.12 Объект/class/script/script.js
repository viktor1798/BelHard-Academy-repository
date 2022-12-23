//методы массивов
let arr1 = ["One", "Two", "three"];

// method pop() - удаляет последний элемент и возвращет элемент

//let end = arr1.pop();

//console.log(arr1);
//console.log(end)

// method push() - добовляет элементы в конец массива

// arr1.push("Four","Five","Six");

// console.log(arr1);

// method shift() - удаляет первый элемент и возвращает его 

// let first = arr1.shift();

// console.log(first);
// console.log(arr1);

// method unshift() - добавляет элемент в начало массива

// arr1.unshift("Minus One","Zero");
// console.log(arr1);

// method join() - преобразует массив в строку

// let arr1String = arr1.join(", ")

// console.log(arr1String);

//пример 

let arrFruit = ["Банан", "Апельсин", "Яблоко"];
let arrNames = ["Kolya", "Masha", "Egor", "Viktor"];

// let s = "";

// for (let i = 0; i < arrFruit.length; i++) {
//     s += `${arrNames[i]} получает ${arrFruit[i]};`;
    
// }

// console.log(s);

// method splice() - заменяет часть элементов в массиве

let numbersArray = [1,2,3,4,5];

// let cutNum = numbersArray.splice(1,2, 10,12,15); // начиная с первого элемента, убирает 2 элемента, и добавляет 3 элемента

// console.log(cutNum);
// console.log(numbersArray);

// method slice () - копирует часть массива, не изменяя текущий

// let copy = arrFruit.slice(1,3); // копирует 1 и 2 элемент массива, не копируя 3 включительно

// console.log(copy);
// console.log(arrFruit);

// method reverse - меняет порядок на обратный

// numbersArray.reverse();

// console.log(numbersArray)

// цикл forEach -  позволяет запускать функцию для каждого элемента массива

// arrFruit.forEach((element,i,arrFruit) => {
//     console.log(`${i}: ${element} массива ${arrFruit} `);  
// });

let text = textItem1.innerHTML;

let newTextArray = text.split(" ")
newTextArray.splice(2,2, "крупный,","современый")

let newtext = newTextArray.join(" ")
console.log(newtext)


textItem2.innerHTML = newtext;


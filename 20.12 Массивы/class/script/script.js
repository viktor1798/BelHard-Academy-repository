// // function decloration

// function nameFunc(a,b){
//     return alert(a+b);
// }

// nameFunc(2,3)

// //function exprassion

// let nameFunc2=(z,x)=>{
//     return alert(z+x)
// }

// nameFunc2(4,3);

//Array

//конструктор

// let arr1=new Array(); //пустой массив
// let arr2=new Array(5); //массив с 5-ю элементами
// let arr3=new Array("One", "Two", "three"); //массив с 3-я элементами типа String

// let arr4 = []; //пустой массив
// let arr5 = ["One", "Two", "three"]; //массив с 3-я элементами типа String

// // Вывод элементов

// console.log(arr5);
// console.log(arr5[1]);
// arr5[1]= "No Two"
// console.log(arr5[1]);
// console.log(arr5);
// arr5[3]= "four"
// console.log(arr5);
// // arr5[5]= "five"   // не имеет смысла
// // console.log(arr5);


// // перебор массива

// for(let i=0;  i<=3;i++){
//     console.log(arr5[i]);
// }

// // for...of...
// for(let em of arr5){
//     console.log(em);
// }


// // светофор

// let svetofor = ["Red ","yellow ", "green"]

// for(let i=0;i<=2;i++){
//     box.innerHTML +=`<span style="color:${svetofor[i]}">${svetofor[i]}</span> <br>` 
//     //`${svetofor[i]} <br>`
// }

// for(let cs of svetofor){
    
//     box.innerHTML += `<span style="color:${cs}">${cs}</span> <br>`
    
// }
     
// методы массива

let arr5 = ["One", "Two", "three"]; //массив с 3-я элементами типа String

let names = "Kolya, Masha, Egor"; // строка

let arrayNames = names.split(", "); // разделение строки

console.log(arrayNames)
//событие и обработка событий



// onclick - нажатие курсора на HTML элемент
// onload - завершение браузером загрузки страницы
// onmouseover - наведение курсора на HTML элемент
// onmouseout - убрать мышь с области элемента
// onchange - изменяет HTML элемент

// function sayHello(){
//     alert("Привет")
// }

// function changeText(){
//     let count = 1
//     for(let i=0; i < 10; i++){
//         return id1.innerHTML +=count++
//     } 
// }


// function changeText1(id){
//     let count = 1
//     for(let i=0; i < 10; i++){
//         return id.innerHTML +=count++
//     } 
// }


// function textOn(){
//     id1.innerHTML = `Шаурма это хорошо`
// }
// function textOff(){
//     id1.innerHTML = ``
// }


// function upperCase(){
//     text.value = text.value.toUpperCase();
// }

function func1(){
    alert("hi");
    
}

function func2(){
    alert("Hate")
}

function func3(){
    elem1.innerHTML ="Pain"
    
}
function func4(){
    elem1.style = "color: red;"
    
}

elem.addEventListener("click", func1);
elem1.addEventListener("click", func2);



elem1.addEventListener("mouseover", func3);
elem1.addEventListener("mouseover", func4);

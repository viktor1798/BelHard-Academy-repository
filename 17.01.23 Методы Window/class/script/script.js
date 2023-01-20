// методы для строк

// let s = "https://www.google.com/";

// let l = s.length;
// console.log(l);

// let pos = s.indexOf("//",0);

// let str = s.substring(pos+2,l-1)
// console.log(pos);
// console.log(str);


//объекты браузера window

// document
// navigator
// history
// screen
// location

// alert - является методом window;

//открытие полноразмерного изображение
// function wind(){
//     window.open("window.html", null, "width: 1200px, ")
// }

// Поиск элементов по коллекции документов

// links
// forms
// images


// for(let i = 0; i<3;i++){
//     console.log(document.images[i].src);
//     console.log(document.links[i].href);
//     console.log(document.forms[i].name);
// }


// box.innerHTML = `<p> Браузер: <br> ${navigator.appCodeName}<br>
// ${navigator.appCodeName}<br>
// ${navigator.appVersion}<br>
// </p>
// <p>
// Посетили адресов:
// <br>
// ${history.length}
// <br>
// <p>
// Экран <br>
// ${screen.width}
// <br>
// ${screen.height}<br> ${screen.colorDepth}
// </p>
// </p>
//`

// box1.innerHTML=`<p> href: ${location.href}</p>
// <p> href: ${location.host}</p>
// <p> href: ${location.hash}</p>
// <p> href: ${location.pathname}</p>
// <p> href: ${location.search}</p>
// `


// Объект событий

// function eve(e){
//     let s = ""
//     s= `Тип события ${e.type}
//     Источник события ${e.srcElement.tagName}
//     Координаты ${e.clientX} x ${e.clientY}`;

//     alert(s);
// }


// Методы создания узлов
// document.createElement - создает HTML элемент
// append() / appendChild() - добовляют эл-т в dom
// remove() / removeChild() - удаляет эл-т 

// работа с атрибутами
// setAtribute() - установить атрибут
// getAtribute () / hasAtribute() - получить / проверить наличие атрибута
// removeAtribute() - удалиение атрибута

//пример 1

// let newDivEl = document.createElement("div");
// newDivEl.innerHTML = "Hi";
// newDivEl.setAttribute("id","box")
// document.body.append(newDivEl);

// //пример 2

// let mySelector = document.createElement("section");
// mySelector.setAttribute("id","box1");
// mySelector.style = `
//     width:550px;
//     height:400px;
//     border:1px solid #000;
//     margin: 0 auto;
// `
// // mySelector.innerHTML = `<img src = "images/img1b.jpg"/>`;

// let myImg = document.createElement('img');
// myImg.setAttribute("src","images/img1b.jpg")

// mySelector.append(myImg);


// document.body.append(mySelector);


// // myImg.remove();
// // newDivEl.remove();
// // mySelector.remove();


// setTimeout(()=> myImg.remove(),2000);
// setTimeout(()=>newDivEl.remove(),4000);
// setTimeout(()=>mySelector.remove(),6000);

//cлайдер

// let newSlide = document.createElement('img');
// newSlide.setAttribute('id', 'slide2')
// newSlide.setAttribute('src', 'images/img2b.jpg');
// newSlide.style = `
// top:-404px;
// left: 552px;
// `;
// box.append(newSlide);

// let slide1 = document.getElementById('slide1');
// let slide2 = document.getElementById('slide2');

// let pos = 1;

// moveImg()

// function moveImg() {
//     const w = 555;
//     let step = 5;
    
//     if (pos > w) {
//         clearTimeout(timerId);
//     }else{
//         slide1.style.right = `${pos}px`
//         slide2.style.left = `${-pos+w}px`
//         pos+=step;

//     }

//     timerId= setTimeout(moveImg,2-pos);
// }
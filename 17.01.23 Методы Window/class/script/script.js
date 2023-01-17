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

box1.innerHTML=`<p> href: ${location.href}</p>
<p> href: ${location.host}</p>
<p> href: ${location.hash}</p>
<p> href: ${location.pathname}</p>
<p> href: ${location.search}</p>

`
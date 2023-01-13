//метод setTimeout

// function sayHi() {
//     alert("Hi")
// }

// setTimeout(sayHi(), 1000);

// let i = 0, time = 10;

// function timer() {
//     if (i > time) {
//         i = 0
//     }
//     id1.innerHTML = `таймер до ${time}: ${i++}`
//     setTimeout(timer, 2000)
// }
// timer();

//let hi = "hello ";

//clearTimeout - останавливает дейстиве SetTimeout

// function stop(){
//     clearTimeout(timerId)
// }


// function hello() {

//     id2.innerHTML += ` ${hi}`
//     timerId = setTimeout(hello, 1000);

//     console.log(timerId)
// }



let i=1, count =5
let arrHref = ["https://www.google.com/", "https://yandex.by","https://translate.google.by/","https://leetcode.com/","https://www.efset.org/ru/"]
function imgV() {
    if (i > count) {
        i = 1
    }
    aArr.href = arrHref[i-1]
    id3.src = `images/${i++}.jpg`
    setTimeout(imgV, 2000)
}
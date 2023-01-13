//метод setTimeout

// function sayHi() {
//     alert("Hi")
// }

// setTimeout(sayHi(), 1000);

let i = 0, time = 10;

function timer() {
    if (i > time) {
        i = 0
    }
    id1.innerHTML = `таймер до ${time}: ${i++}`
    setTimeout(timer, 2000)
}
// timer();

let hi = "hello ";

//clearTimeout - останавливает дейстиве SetTimeout

function stop(){
    clearTimeout(timerId)
}


function hello() {

    id2.innerHTML += ` ${hi}`
    timerId = setTimeout(hello, 1000);

    console.log(timerId)
}

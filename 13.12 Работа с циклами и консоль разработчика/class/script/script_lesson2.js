// let a = +prompt("Введите число A:");
// let b = +prompt("Введите число B");

// if(a ==''|| a == null || b == ''|| b == null){
//     alert("ошибка")
// } else if (a>b){
//     alert("Число А больше В");
// }else if(a<b){
//     alert("Число А меньше В");
// }else  alert("Числа равны");

// let i = 1;

// while(i <= 10){
//     alert(i++);
// }

for (i = 1; i <= 11; i++){
    box.innerHTML += `<img src="images/${i}.jpg">`;
}


{let i = 1;

while(i<=10){
    box1.innerHTML += `<img src="images/${i}.png">`;
    i++;
}}


for(let w = 50 ; w <= 1000; w+=50){
    box2.innerHTML += `<img id="idimg" src="images/minsk.jpg" style="width: ${w}px; alt="" ">`
}
let a = +prompt("Введите число A:");
let b = +prompt("Введите число B");

if(a ==''|| a == null || b == ''|| b == null){
    alert("ошибка")
} else if (a>b){
    alert("Число А больше В");
}else if(a<b){
    alert("Число А меньше В");
}else  alert("Числа равны");
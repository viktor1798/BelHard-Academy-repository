//1

let user = prompt("Кто там?", '')
let password;
if(user==''||user == null){
    alert('Отмена');
}else if( user !=="Админ"){
    alert("Я тебя не знаю")
}else if(user == "Админ") password=prompt("Пароль",'');
if(password==''||password == null){
    alert('Отмена');
}else if( password !=="Я главный"){
    alert("Я тебя не знаю");
}else if(password =="Я главный"){
    
}

//2

for(i=2; i<=10;i++){
    if (i%2 == 0){
        idword1.innerHTML += i + " ";
    }
}



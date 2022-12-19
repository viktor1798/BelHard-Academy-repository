//1

// if (a + b < 4) {
//     result = 'Мало';
//   } else {
//     result = 'Много';
//   }

let num1 = +prompt("num1");
let num2 = +prompt("num2");

function thenarOperator(a,b){
    let operator = (a + b < 4) ?alert ("Мало"):alert("Много");
    return operator;
}

function switchOperator (a,b){
    let x = a+b;
    
    switch(x<4){
        case true:
            return alert("Мало");

        case false:
            return alert ("Много");
        
        default:
            return alert("gg");
    }
}


// thenarOperator(num1,num2);
switchOperator(num1,num2);
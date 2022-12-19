//1

// if (a + b < 4) {
//     result = 'Мало';
//   } else {
//     result = 'Много';
//   }

// let num1 = +prompt("num1");
// let num2 = +prompt("num2");

// function thenarOperator(a,b){
//     let operator = (a + b < 4) ?alert ("Мало"):alert("Много");
//     return operator;
// }

// function switchOperator (a,b){
//     let x = a+b;
    
//     switch(x<4){
//         case true:
//             return alert("Мало");

//         case false:
//             return alert ("Много");
        
//         default:
//             return alert("gg");
//     }
// }


// thenarOperator(num1,num2);
//switchOperator(num1,num2);

//2












//3.1

function equationTwo(x,y){
    let a = Math.pow(Math.cos((4*x)),2)- (1+Math.cos(4*y)/2);
    let r;
    if(a < Math.sin(Math.pow(y,2))){
        r = Math.PI/4-x;
    } else if(a>=Math.pow(Math.sin(y-1),2)){
        r = Math.tan(x)+tan(Math.PI/4*x)
    }

    return alert(r);
}

equationTwo(0.8,-3.75);

//3.2

function equationThree(a,b){
    let x = (Math.sqrt(2.3 + Math.pow(a,2))/Math.log(Math.pow(b,3)))+8.77;
    let y = Math.asin(Math.pow(a,2)/Math.pow(b,3))/x;
   
    let k = (x<Math.sqrt(Math.pow(y,5))) ? 2*Math.pow(x,2)-3*y-19*Math.pow(y,2):Math.pow(x,2)-6*Math.pow(y,2);
   
    return alert(k);
}





equationThree(7,9);

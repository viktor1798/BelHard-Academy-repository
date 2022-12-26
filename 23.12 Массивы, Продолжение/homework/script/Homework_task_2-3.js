//2

// let x = [0.3, 5.2, 9.4, 8];
// let y = [43,5,3.4, 8, 20];


// function calculation(arr1,arr2){
//     let sum1 =0;
//     let sum2 =0;

//     for(let numbers1 of arr1){
//         sum1 += numbers1;
//     }
//     for (let numbers2 of arr2){
//        return sum2 += numbers2;
//     }

//     let c = (sum1+sum2)/2
//     return c;
// } 

// alert(calculation(x,y));


//3

//тест

// let m = +prompt("Введите число M")
// let n = +prompt("Введите число N")

// function factorialM(x){
//     return (x != 1) ? x * factorialM(x - 1) : 1;
// }
// function factorialN(y){
//     return (y != 1) ? y * factorialN(y - 1) : 1;
// }
// function factorialPlusOne(z){
//     let a = z+1
//     return (a != 1) ? a * factorialPlusOne(z - 1) : 1;
// }

function factorialExpression(){
    let m = +prompt("Введите число M")
    let n = +prompt("Введите число N")
    
    let c;
    
    function factorialM(x){
        return (x != 1) ? x * factorialM(x - 1) : 1;
    }

    function factorialN(y){
        return (y != 1) ? y * factorialN(y - 1) : 1;
    }

    function factorialPlusOne(z){
        let a = z+1
        return (a != 1) ? a * factorialPlusOne(z - 1) : 1;
    }

    c = (factorialM(m)+factorialN(n))/factorialPlusOne(m);
    alert(c);

    
}

factorialExpression();
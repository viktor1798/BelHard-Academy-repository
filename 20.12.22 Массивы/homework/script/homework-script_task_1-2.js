// //1

// function sumArray() {

//     let arrayNum =[];

//     while (true){
//         let value = prompt("Введите число!:")

//         if(value === null || value === "" || !isFinite(value)){
//             break;
//         }

//         arrayNum.push(+value);
//     }
//     let sum = 0;

//     for(let number of arrayNum){
//         sum += number;
//     }

//     return sum;
    
// }

// alert(sumArray());


// 2
//test
// let d = [12, 0.4, 30, -2, 9.3]

// let max = Math.max(...d);
// let index = d.indexOf(max);
// alert (index);
// alert(max)

// function maxElArray(){
//     let d =[]
//     let max, index;
//     while (true){
//     let value = prompt("Введите число!:")
    
//     if(value === null || value === "" || !isFinite(value)){
//         break;
//     }

//        d.push(+value);
//     }

//     max = Math.max(...d);
//     index = d.indexOf(max);

//     return `Число ${max} c индексом ${index}`    
// }

// alert(maxElArray());
//2

let x = [0.3, 5.2, 9.4, 8];
let y = [43,5,3.4, 8, 20];


function calculation(arr1,arr2){
    let sum1 =0;
    let sum2 =0;

    for(let numbers1 of arr1){
        sum1 += numbers1;
    }
    for (let numbers2 of arr2){
       return sum2 += numbers2;
    }

    let c = (sum1+sum2)/2
    return c;
} 

alert(calculation(x,y));
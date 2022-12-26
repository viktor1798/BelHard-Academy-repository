//1

function sumArray() {

    let arrayNum =[];

    while (true){
        let value = prompt("Введите число!:")

        if(value === null || value === "" || !isFinite(value)){
            break;
        }

        arrayNum.push(+value);
    }
    let sum = 0;

    for(let number of arrayNum){
        sum += number;
    }

    return sum;
    
}

alert(sumArray());
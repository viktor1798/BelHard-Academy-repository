//6
// for(let i=1; i<=11; i++ ){
//     if(i%2==0){
//         // idword4.innerHTML += i + " ";
//         boximg6.innerHTML += `<img src="images/${i}.jpg" style="border:2px solid green"; alt="" >`
//     }else boximg6.innerHTML += `<img src="images/${i}.jpg" style="border: 2px solid blue"; alt="" >`
// }

//7

let columCount = +prompt("Количество столбцов?");
let rowCount = +prompt("Введите строки");

let count = 1;

let myTable = "";



for(let i=1; i<=rowCount; i++){
    myTable += "<tr>"
        for(let j = 1; j<= columCount; j++){
            myTable += `<td> Ячейка ${count++} </td>`            
        }
    myTable +="</tr>"
}

myTable = `<table> 
                <tbody>
                    ${myTable} 
                </table>
            </tbody>`;


console.log(myTable);

table.innerHTML = myTable;
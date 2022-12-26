function createMenu(){

let elemMenu = formMenu.elemMenu.value;

let fc = formMenu.fc.value;
let hc = formMenu.hc.value;
let bc = formMenu.bc.value;



let arrayMenu = elemMenu.split(", ");

myMenu.innerHTML = "";

for (let i = 0; i < arrayMenu.length; i++) {
    myMenu.innerHTML += `
        <li> <a href="#">${arrayMenu[i]}</a> </li>    
    `
    
}

myMenu.innerHTML = `<ul>${myMenu.innerHTML}</ul>`

}
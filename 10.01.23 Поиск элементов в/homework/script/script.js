function change(){
    let editStyle= document.getElementsByTagName("section")
    for (const index of editStyle) {
        index.style.fontSize = "18px";
        index.style.color = "blue";
        index.style.fontFamily = "Arial";
        index.style.textTransform = "uppercase";
        index.style.fontSize = "15px";
        index.style.borderRadius =" 1px solid black";
    }

    
    console.log(editStyle);
}

function change1(){
    let literess = document.querySelectorAll("p:nth-child(odd)")
    for (const iterator of literess) {
        console.log(iterator.innerHTML)
        even_literes.innerHTML+= `${iterator.innerHTML}`;
    }
    
}
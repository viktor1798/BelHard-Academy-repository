let divCount= +prompt("Введите количество DIV:")

let myDiv;
//добить до концка
for(let i=1; i<=divCount; i++){

    let symbol = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    let color ="";
        for(let j =1; j<=6;j++){
            let maxP = symbol.length;
            let r =Math.floor(Math.random()*maxP)


             color+= symbol[r]
}

console.log(`#${color}`)

    let imgCountRandom = Math.random()
    const maxCount = 11;
    let random = imgCountRandom*maxCount;
    let imgRandom= Math.round(random);

    console.log(imgRandom);
    myDiv += `<div style="background-color: #${color};"">`
        myDiv += `<img src="images/${imgRandom}.jpg" alt="">`            
    myDiv +="</div>"
}

div_img.innerHTML = myDiv;
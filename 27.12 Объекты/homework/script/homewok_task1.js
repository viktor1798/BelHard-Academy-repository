let divCount= +prompt("Введите количество DIV:")

let myDiv;

for(let i=1; i<=divCount; i++){

    let symbol = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
    let maxP = symbol.length;
    let r =Math.floor(Math.random()*maxP)
    let randomColor = `#${symbol[r]}${symbol[r]}${symbol[r]}${symbol[r]}${symbol[r]}${symbol[r]}`

    let imgCountRandom = Math.random()
    const maxCount = 11;
    let random = imgCountRandom*maxCount;
    let imgRandom= Math.round(random);

    console.log(randomColor);
    myDiv += `<div style="background-color: ${randomColor};"">`
        myDiv += `<img src="images/${imgRandom}.jpg" alt="">`            
    myDiv +="</div>"
}

div_img.innerHTML = myDiv;
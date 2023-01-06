let myCard = {
    poster: "sloy_1_9.png",
    type: "sloy_4_8.png",
    sale: "sloy_2_3.png",
    header: "Тайная жизнь",
    subtitle: "домашних животных 2",
    price: 50,
    sale_price: 10,
    currency: "руб.",
    saleImage: true,
    rating: 4,
    button: "sloy_5_14.png",
}

// формат полной стоимость

let fullPrice = `${myCard.price},00 ${myCard.currency}`;
console.log(fullPrice);


let salePrice = `${Math.round(myCard.price - (myCard.price * (myCard.sale_price / 100)))},00 ${myCard.currency}`;
// console.log(salePrice);


//звездочки
let rang = "";


switch (myCard.rating) {
    case 1:
        rang = "star star_border star_border star_border star_border"

        break;
    case 1.5:
        rang = "star star_half star_border star_border star_border"

        break;
    case 2:
        rang = "star star star_border star_border star_border"

        break;
    case 2.5:
        rang = "star star star_half star_border star_border"

        break;
    case 3:
        rang = "star star star star_border star_border"

        break;
    case 3.5:
        rang = "star star star star_half star_border"

        break;
    case 4:
        rang = "star star star star star_border"

        break;
    case 4.5:
        rang = "star star star star star_half"

        break;
    case 5:
        rang = "star star star star star"

        break;
    default:
        rang = "star_border star_border star_border star_border star_border"
        break;
}

console.log(rang);



let proverka ;

if(myCard.saleImage==true){
    proverka = myCard.sale;
}else proverka = null;



let divPrice=" ";

if(myCard.sale_price == 0){
     divPrice =`<p class="current-price">${fullPrice}</p>`
}else{ divPrice=`<p class="current-price">${salePrice}</p>
                <p class="sale ">${fullPrice}</p>`}


let imgNoSale;

if(!myCard.saleImage){
    imgNoSale = `<img class ="type-no-sale" src="img/${myCard.type}" alt="">`
}else imgNoSale =`<img class ="sale_img" src="img/${proverka}" alt="">
<img class ="type" src="img/${myCard.type}" alt="">`


let s =`<div class="main-body">
<div class="body-img">
    <img src="img/${myCard.poster}" alt="">
    ${imgNoSale}
    
        
    
</div>
<div class="title">
    <p class="title_text">${myCard.header} <br> ${myCard.subtitle}</p>
</div>
<div class="price">
    ${divPrice}
</div>
<div class="rating">
    <span class="material-icons">
        ${rang}
    </span>
</div>
<div class="buy-button">
    <img src="img/${myCard.button}" alt="">
</div>
</div>`

cards.innerHTML = s;
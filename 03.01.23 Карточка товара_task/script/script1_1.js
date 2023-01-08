let arrMyCard = [
    {
        card1: {
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
    },
    {
        card2: {
            poster: "toy4.jpg",
            type: "sloy_4_8.png",
            sale: "sloy_2_3.png",
            header: "История игрушек 4",
            subtitle: "Приключение Вилкинса",
            price: 60,
            sale_price: 10,
            currency: "руб.",
            saleImage: true,
            rating: 4.5,
            button: "sloy_5_14.png",
        }
    },
    {
        card3: {
            poster: "ferd.jpg",
            type: "sloy_4_8.png",
            sale: "sloy_2_3.png",
            header: "Фердинанд",
            subtitle: "Побег из коровника",
            price: 40,
            sale_price: 10,
            currency: "руб.",
            saleImage: true,
            rating: 3.5,
            button: "sloy_5_14.png",
        }
    }

]

for (let i = 0; i < arrMyCard.length; i++) {
    for (const key in arrMyCard[i]) {

        let poster = arrMyCard[i][key].poster
        let type = arrMyCard[i][key].type
        let sale = arrMyCard[i][key].sale
        let header = arrMyCard[i][key].header
        let subtitle = arrMyCard[i][key].subtitle
        let price = arrMyCard[i][key].price
        let sale_price = arrMyCard[i][key].sale_price
        let currency = arrMyCard[i][key].currency
        let saleImage = arrMyCard[i][key].saleImage
        let rating = arrMyCard[i][key].rating
        let button = arrMyCard[i][key].button
        let sale_icon;
        let divPrice = " ";
        let imgNoSale;


        let fullPrice = `${price},00 ${currency}`;

        let salePrice = `${Math.round(price - (price * (sale_price / 100)))},00 ${currency}`;

        let rang = "";


        switch (rating) {
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


        if (saleImage == true) {
            sale_icon = sale;
        } else sale_icon = null;



        if (sale_price == 0) {
            divPrice = `<p class="current-price">${fullPrice}</p>`
        } else {
            divPrice = `<p class="current-price">${salePrice}</p>
                        <p class="sale ">${fullPrice}</p>`
        }



        if (!saleImage) {
            imgNoSale = `<img class ="type-no-sale" src="img/${type}" alt="">`
        } else imgNoSale = `<img class ="sale_img" src="img/${sale_icon}" alt="">
        <img class ="type" src="img/${type}" alt="">`



        let s = `<div class="main-body">
        <div class="body-img">
            <img src="img/${poster}" alt="">
            ${imgNoSale}
        </div>
        <div class="title">
            <p class="title_text">${header} <br> ${subtitle}</p>
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
            <img src="img/${button}" alt="">
        </div>
        </div>`

        cards.innerHTML += s;
    }
}
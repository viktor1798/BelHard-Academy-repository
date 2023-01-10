let arrObj = [
    {
        troy: {
            id:"troy",
            img: "troi.jpg",
            title: "Троицкое предместье",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima, accusamus quaerat quae delectus aut vero temporibus, blanditiis in odio mollitia quibusdam fuga pariatur obcaecati consequuntur architecto necessitatibus molestias quis!",
        }
        
    },
    {
        mir: {
            id:"mir",
            img: "mir.jpg",
            title: "Мирский замок",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima, accusamus quaerat quae delectus aut vero temporibus, blanditiis in odio mollitia quibusdam fuga pariatur obcaecati consequuntur architecto necessitatibus molestias quis!",
        }
    },
    {
        castule: {
            id:"castule",
            img: "red.jpg",
            title: "Красный костёл",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima, accusamus quaerat quae delectus aut vero temporibus, blanditiis in odio mollitia quibusdam fuga pariatur obcaecati consequuntur architecto necessitatibus molestias quis!",
        }
    }
]
function infoOn(im,ds,ttl){
           description.innerHTML=`<img onclick="infoOff()" class="main-img" src="images/${im}" alt="">
            <div>
                <h1>${ttl}</h1>
                <p>${ds}</p>
            </div>` 


}
function infoOff(){
    description.innerHTML=" "
}

for (let i = 0; i <= arrObj.length; i++) {
    for (const key in arrObj[i]) {
        let id = arrObj[i][key].id;
        let img = arrObj[i][key].img;
        let title = arrObj[i][key].title;
        let dscrptn = arrObj[i][key].description;
        
        let output = `
        <div>
            <img onclick="infoOn('${img}','${dscrptn}','${title}')" id="${id}" src="images/${img}" alt="">
            <p>${title}</p>
        </div>`;

        main.innerHTML += output;
        // console.log(arrObj[i][key].img);
    }
}

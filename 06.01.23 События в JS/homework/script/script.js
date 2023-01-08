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

function infoOn0(elem) {
    for (let i = 0; i <= arrObj.length; i++) {
        for (const key in arrObj[i]) {
            
            if(elem.id =="troy"){
                a = `
    <img onclick="infoOff()" class="main-img" src="images/${arrObj[i].troy.img}" alt="">
    <div>
        <h1>${arrObj[i].troy.title}</h1>
        <p>${arrObj[i].troy.description}</p>
    </div>`
            }

        return description.innerHTML =a;
        }
    }
}
function infoOn1(elem) {
    for (let i = 0; i <= arrObj.length; i++) {
        for (const key in arrObj[i]) {
            if(elem.id =="mir"){
                a = `
                        <img onclick="infoOff()" class="main-img" src="images/${arrObj[i].mir.img}" alt="">
                        <div>
                            <h1>${arrObj[i].mir.title}</h1>
                            <p>${arrObj[i].mir.description}</p>
                        </div>`
            }
          

            return description.innerHTML =a;
        }
    }
}
function infoOn2(elem) {
    for (let i = 0; i <= arrObj.length; i++) {
        for (const key in arrObj[i]) {
            if(elem.id =="castule"){
                a = `
                    <img onclick="infoOff()" class="main-img" src="images/${arrObj[i].castule.img}" alt="">
                    <div>
                        <h1>${arrObj[i].castule.title}</h1>
                        <p>${arrObj[i].castule.description}</p>
                    </div>`
            }
          

            return description.innerHTML =a;
        }
    }
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
            <img onclick="infoOn${i}(this)"id="${id}" src="images/${img}" alt="">
            <p>${title}</p>
        </div>`;

        main.innerHTML += output;
        // console.log(arrObj[i][key].img);
       
        console.log(i)
    }
}



// switch (elem.id) {
//     case "mir":
//         a = `
//         <img onclick="infoOff()" class="main-img" src="images/${arrObj[i].mir.img}" alt="">
//         <div>
//             <h1>${arrObj[i].mir.title}</h1>
//             <p>${arrObj[i].mir.description}</p>
//         </div>`
//         break;
//     case "troy":
//         a = `
//     <img onclick="infoOff()" class="main-img" src="images/${arrObj[i].troy.img}" alt="">
//     <div>
//         <h1>${arrObj[i].troy.title}</h1>
//         <p>${arrObj[i].troy.description}</p>
//     </div>`
//         break;

//     case "castule":
//         a = `
//     <img onclick="infoOff()" class="main-img" src="images/${arrObj[i].castule.img}" alt="">
//     <div>
//         <h1>${arrObj[i].castule.title}</h1>
//         <p>${arrObj[i].castule.description}</p>
//     </div>`
//         break;

//     default:
//         alert(undefined)
//         break;
// }
// function infoOn() {
//     for (let i = 0; i <= arrObj.length; i++) {
       
//             let a
            
//             if(arrObj[i].mir.id){
//                 a = `
//                     <img onclick="infoOff()" class="main-img" src="images/${arrObj[i].mir.img}" alt="">
//                     <div>
//                         <h1>${arrObj[i].mir.title}</h1>
//                         <p>${arrObj[i].mir.description}</p>
//                     </div>`
//             }else if(arrObj[i].mir.troy){
//                 a = `
//                 <img onclick="infoOff()" class="main-img" src="images/${arrObj[i].troy.img}" alt="">
//                 <div>
//                     <h1>${arrObj[i].troy.title}</h1>
//                     <p>${arrObj[i].troy.description}</p>
//                 </div>`
//             }else if (arrObj[i].castule.id){
//                 a = `
//                 <img onclick="infoOff()" class="main-img" src="images/${arrObj[i].castule.img}" alt="">
//                 <div>
//                     <h1>${arrObj[i].castule.title}</h1>
//                     <p>${arrObj[i].castule.description}</p>
//                 </div>`
//             }else undefined;



//             // switch (elem.id) {
//             //     case "mir":
//             //         a = `
//             //         <img onclick="infoOff()" class="main-img" src="images/${arrObj[i].mir.img}" alt="">
//             //         <div>
//             //             <h1>${arrObj[i].mir.title}</h1>
//             //             <p>${arrObj[i].mir.description}</p>
//             //         </div>`
//             //         break;
//             //     case "troy":
//             //         a = `
//             //     <img onclick="infoOff()" class="main-img" src="images/${arrObj[i].troy.img}" alt="">
//             //     <div>
//             //         <h1>${arrObj[i].troy.title}</h1>
//             //         <p>${arrObj[i].troy.description}</p>
//             //     </div>`
//             //         break;

//             //     case "castule":
//             //         a = `
//             //     <img onclick="infoOff()" class="main-img" src="images/${arrObj[i].castule.img}" alt="">
//             //     <div>
//             //         <h1>${arrObj[i].castule.title}</h1>
//             //         <p>${arrObj[i].castule.description}</p>
//             //     </div>`
//             //         break;

//             //     default:
//             //         alert(undefined)
//             //         break;
//             // }

//             return description.innerHTML =a;
        
//     }
// }
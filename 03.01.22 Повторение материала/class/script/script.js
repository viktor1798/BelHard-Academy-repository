//многомерный массив

// let matrix =[
// [3,3,3], //0
// [2,4,3], //1
// [3,2,6], //2
// [0,2,6]  //3
// ];

// console.log(matrix[3][0]);

// //объект из массивов 

// let obj = {
//     b:[[1,2],5],
//     c:[2,4,[6,3]],
// }

// console.log(obj.b[0][0]);

// массив из объектов

// let arrObj = [
//     { pic: { f:"1.jpg",
//         w:"500",
//         h: "500",
//     },}, //0
//     {pic: { f:"2.jpg",
//     w:"700",
//     h: "700",
//     },}, //1
//     {pic: { f:"3.jpg",
//     w:"900",
//     h: "900",
//     },} //2
// ]
//     for(let i = 0 ; i<arrObj.length;i++){
//         let f,w,h
//         f= arrObj[i].pic.f;
//         w = arrObj[i].pic.w;
//         h = arrObj[i].pic.h

//         box.innerHTML += `<img src="images/${f}" alt="" style="width:${w}px; height:${h}px"></img>`

//     }

// объекты с разными именами внутри массива

let arrObj = [
    { pic1: { f:"1.jpg",
        w:"500",
        h: "500",
    },}, //0
    {pic2: { f:"2.jpg",
    w:"700",
    h: "700",
    },}, //1
    {pic3: { f:"3.jpg",
    w:"900",
    h: "900",
    },} //2
]
    for(let i = 0 ; i<arrObj.length;i++){
       
        for (const key in arrObj[i]) {
            let f,w,h
            f= arrObj[i][key].f;
            w = arrObj[i][key].w;
            h = arrObj[i][key].h;

            // console.log(f,w,h);
            box.innerHTML += `<img src="images/${f}" alt="" style="width:${w}px; height:${h}px"></img>`
        }

    }
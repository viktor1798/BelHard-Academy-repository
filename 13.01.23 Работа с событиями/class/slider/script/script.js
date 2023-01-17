let i=1, count =6
let arrHref = ["https://www.google.com/", "https://yandex.by/","https://translate.google.by/","https://leetcode.com/","https://www.efset.org/ru/","https://www.facebook.com/"]

function stop(){
    (clearTimeout(stopTime))
}

// отдельая функция, ибо идет повторение кода

function linkText(){
    for(let index = 0; index<arrHref.length;i++){
        console.log(arrHref[index])
    }
}
linkText()
function changeSlider(){
    link.href = arrHref[i-1]
    slider.src = `images/img${i++}b.jpg`;

    title1.innerHTML =`Заголовок слайда ${i}`
    title1text.innerHTML = `<a href="link${i}.html">Подзаголовок слайда ${i}</a>`
    for(let index=0; index<arrHref.length;index++){
        refsite.innerHTML=`<a href="${arrHref[index]}">${arrHref[index]}</a>`
    }
}

function imgS() {
    if (i > count || i==0) {
        i = 1
    }
    changeSlider()

    stopTime = setTimeout(imgS, 2000);
}

function next(){
    if (i > count) {
        i = 1
    }
    changeSlider()

}

function before(){
    if(i < 1){
        i=6
    }
    link.href = arrHref[i-1]
    slider.src = `images/img${i--}b.jpg`;

}
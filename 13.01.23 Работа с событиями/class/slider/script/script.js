let i=1, count =6
let arrHref = ["https://www.google.com/", "https://yandex.by","https://translate.google.by/","https://leetcode.com/","https://www.efset.org/ru/","https://www.facebook.com/"]

function stop(){
    (clearTimeout(stopTime))
}

function imgS() {
    if (i > count) {
        i = 1
    }
    link.href = arrHref[i-1]
    slider.src = `images/img${i++}b.jpg`;

    stopTime = setTimeout(imgS, 2000);
}

//getElementById - поиск элемента по ID



function change(){
    let myImg=  document.getElementById("img1");
    myImg.src =`images/4.jpg`

    let title = document.getElementById("id1")
    title.innerHTML = "Изменненный текст"

    let myButton = document.getElementById("btn1")
    myButton.style.display = "none"
}



let tab = (id,img) => {

    let menu = document.querySelectorAll("section>div")
    for(index of menu){
        index.style =`
            background:#fff;
            color: #000;
        `
    }

    pic.style.opacity = "0"
    setTimeout('newPic()', 500);

    newPic = () => {

        id.style =`
            background:#00f;
            color: #FFF;
        `

        pic.src = `images/${img}`;
        pic.style.opacity = "1"
    }
}
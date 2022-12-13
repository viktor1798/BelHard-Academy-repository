let num_pic = prompt("Введие номер картинки (1-11)");
let format_pic = prompt("Введите формат изображение jpg/png");


if(num_pic==''||num_pic == null || format_pic == ''|| format_pic == null){
    alert('Отмена');
}else if(num_pic < 1 && num_pic > 11 || format_pic !="jpg" && format_pic !="png"){
        alert("Ошибка")
}else img_id.src = `images/${num_pic}.${format_pic}`;
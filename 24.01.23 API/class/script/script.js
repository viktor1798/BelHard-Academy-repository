const MAX = 400;
function init() {
    let media = document.getElementById('media');
    let play = document.getElementById('play');
    let mute = document.getElementById('mute');
    let bar = document.getElementById('bar');
    let progress = document.getElementById('progress');
    let volume = document.getElementById('volume');

    play.addEventListener('click', push);
    media.addEventListener('click', push);
    mute.addEventListener('click', sound);
    bar.addEventListener('click', move)
}

function push() {
    if (!media.paused && !media.ended) {
        media.pause();
        play.innerHTML = "Play"
    } else {
        media.play();
        play.innerHTML = "Pause"
        loop = setInterval(myStatus, 1000);
    }
}
function myStatus() {
    
    if (!media.ended) {
        let size = media.currentTime * MAX / media.duration;
        progress.style.width = `${parseInt(size)}px`;
    } else {
        size = MAX;
        progress.style.width = `${parseInt(size)}px`;
        play.innerHTML = "Play"
        clearInterval(loop);
    }
}
function sound() {
    if (!mute.muted) {
        mute.muted = true;
        mute.innerHTML = "Выкл"
        mute.style.background = "white"
    } else {
        mute.muted = false;
        mute.style.background = "red"
        mute.innerHTML = "Вкл"
    }
}
function move(e){
    if(!media.ended){
        let mouseX = e.pageX - bar.offsetLeft;
        let newTime = mouseX*media.duration/MAX;
        
        media.currentTime = newTime;
        progress.style.width = `${mouseX}px`;
        
    }
}
addEventListener('load', init)
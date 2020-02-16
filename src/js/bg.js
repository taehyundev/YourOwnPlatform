const body = document.querySelector("body");

const IMG_NUM =3;

function paintImage(imgnum){
    const image = new Image();
    image.src = `image/${imgnum +1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);
}
function getRandom(){
    const num = Math.floor(Math.random() *3);
    return num
}

function init(){
    const randnum = getRandom();
    paintImage(randnum);
}

init();
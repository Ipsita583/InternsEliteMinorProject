let image =document.querySelector(".slider_image");
let translate=0;

setInterval(()=>{
    if( translate >=0 && translate <300){
        translate+=100
    }
    else{
        translate=0
    }
    console.log("hii")
    image.style.transition="1s"
    image.style.transform =`translateX(${- translate}%)`
},2000)

function right(){
    if(translate<300){
        translate+=100
        image.style.transition="1s"
    image.style.transform =`translateX(${- translate}%)`

    }
}
function left(){
    if(translate>0){
        translate-=100
        image.style.transition="1s"
    image.style.transform =`translateX(${- translate}%)`

    }
}

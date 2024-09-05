let clouds = document.getElementById('clouds');
let bike = document.getElementById('bisycle');
let details = document.querySelectorAll('.description');
onscroll = ()=>{
    if ( window.scrollY > 50 ){
        bike.style.right = `${window.scrollY - 90}px`;
        clouds.style.scale = '0.4';
        clouds.style.right = `${-window.scrollY - 30}px`;
    }
    if ( window.scrollY > 280){
        clouds.style.opacity= '0';
    } else{
        clouds.style.opacity = '1';
    }
}
window.addEventListener('scroll' , () =>{
    if (window.scrollY >= 230){
        details[0].style.opacity = '1';
        details[0].style.scale = '1';
    }
    else{
        details[0].style.opacity = '0';
        details[0].style.scale = '0.5';
    }
    if(window.scrollY >= 400){
        details[1].style.opacity = '1';
        details[1].style.scale = '1';
    }else{
        details[1].style.opacity = '0';
        details[1].style.scale = '0.5';
    }
})
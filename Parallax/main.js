let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let word = document.querySelector('.word');

window.onscroll = () => {
    let value = scrollY;
    stars.style.left = value +'px';
    moon.style.top = value * 4 +'px';
    mountains3.style.top = value * 2 +'px';
    mountains4.style.top = value * 1.5 +'px';
    river.style.top = value  +'px';
    boat.style.top = value  +'px';
    boat.style.left = value *3 + 'px'
    word.style.fontSize = value - 40 + 'px';
    if ( scrollY >= 95){
        word.style.fontSize  = 96 - 40 + 'px';
        word.style.position  = 'fixed';
        document.querySelector('.main').style.background = 'linear-gradient( to bottom , #073b5e , #0b2b41)';
     
}else {
        document.querySelector('.main').style.background = 'linear-gradient(  #200016,#10001f )';
    }
    
   if ( scrollY >= 417 ){
        word.style.display = 'none';
    } else {
        word.style.display = 'block';   
    }

}
    
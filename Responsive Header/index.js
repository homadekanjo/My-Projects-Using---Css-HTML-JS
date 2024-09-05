let showBtn = document.querySelector('.menu__bar');
let nav = document.querySelector('.navBar');
let Btns = document.querySelector('.logBtns');
showBtn.onclick = () =>{
    nav.classList.toggle('nav__shown');
    Btns.classList.toggle('btns__shown');
}
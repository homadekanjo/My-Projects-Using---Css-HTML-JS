let bar = document.querySelector('.bars');
let nav = document.querySelector('.navbar');
let links = document.querySelectorAll('.item');
const loginField = document.querySelector('.logContainer');
const signUpBtn = document.getElementById('sign_up_btn');
const signInBtn = document.getElementById('sign_in_btn');
const RegisterForm = document.querySelector('.regist');
window.onresize = () => {if (window.innerWidth >= 695){
    nav.classList.remove('navShown');
}}
bar.onclick = ()=>{
    nav.classList.toggle('navShown');
}
links.forEach(item =>{
    item.addEventListener( 'click', ()=>{
        document.querySelector('.active').classList.remove('active');
        item.classList.add('active');
    })
})
signInBtn.onclick = showSignIn;
signUpBtn.onclick = showSignUp;

function showSignIn(){
    loginField.classList.toggle('visibileField');
    RegisterForm.classList.remove('visibileField_reg');
}
function showSignUp(){
    RegisterForm.classList.toggle('visibileField_reg');
    loginField.classList.remove('visibileField');
}
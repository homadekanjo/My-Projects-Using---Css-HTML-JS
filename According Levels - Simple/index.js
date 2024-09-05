const dataInput = document.getElementById('data');
const bars = document.querySelectorAll('.bar');
const progress = document.querySelectorAll('#progress');
const applyBtn = document.getElementById('apply');
const inf = document.getElementById('inf');
const titles = document.querySelectorAll('.title');
const warning = document.querySelector('.warning');
bars.forEach( bar =>{
    bar.addEventListener('click' , () =>{
        if (bar.firstChild.innerHTML != '' ){
            dataInput.value = parseFloat(bar.firstChild.innerHTML) ;
        } else {
            dataInput.value = '';
        }
        inf.innerHTML = bar.title;
        warning.classList.remove('warn__show');    
    })
})

function applyData(){
    if ( inf.innerHTML != '' && dataInput.value != '' && dataInput.value <= 100){
        dataInput.focus();
        bars.forEach( bar =>{
            if ( bar.title == inf.innerHTML  ){
                bar.firstChild.style.opacity = '1';
                bar.firstChild.style.width = `${dataInput.value}%`;
                bar.firstChild.innerHTML = `${dataInput.value}%`;
                dataInput.value = '';
                inf.innerHTML ='';
            }
            warning.classList.remove('warn__show');
        })
    }else if (dataInput.value !== '' || inf.innerHTML == ''  ) {
        warning.innerHTML = 'select a category';
        warning.classList.add('warn__show');
    }

}

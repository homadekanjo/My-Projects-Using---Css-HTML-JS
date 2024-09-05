let input = document.getElementById('main__input');
let addTextBtn = document.getElementById('add__text');
let boxes = document.querySelectorAll('.box');
let drag = null ; 
addTextBtn.onclick = ()=>{
    if ( input.value != ''){
        boxes[0].innerHTML += `<div class="item" draggable = "true" >${input.value}</div>`
        input.value = '';
    }
    dragItem();
}
function dragItem(){
    let items = document.querySelectorAll('.item');
    items.forEach( item =>{
        item.addEventListener('dragstart' , () =>{
            drag = item;
            item.style.opacity = '0.5';
            
            boxes.forEach( box =>{
                box.style.animation = 'shake .5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite';
            } )
        })
        item.addEventListener('dragend' , () =>{
            drag = null ;
            item.style.opacity = '1';
            boxes.forEach( box =>{
                box.style.animation = 'none';
            } )
        })
        boxes.forEach(box => {
            box.addEventListener('dragover' , e => {
                e.preventDefault()
                box.style.background = '#f00';
                box.style.animation = 'none';
                box.style.width = '350px';
            })
            box.addEventListener('dragleave' , () => {
                box.style.background ='#FFF';
                box.style.animation = 'shake .5s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite';
                box.style.width = '300px';
            })
            box.addEventListener('drop' , () => {
                box.append(drag);
                box.style.background = '#fff';
                box.style.width = '300px';
            } )
        })
    } )
}
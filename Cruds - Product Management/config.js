let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let scrollUp = document.getElementById('scroll__up');
let arrowUp = document.getElementById('arrow__up');
let searchBox = document.getElementById('search');

 // operations
 let mode = 'creat';
 let indx;
function getTotal(){
    if ( price.value != '' ){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value ;
        total.innerHTML = result ;
        total.style.background = '#040';
    } else {
        total.style.background = '#e23f3f';
        total.innerHTML = '';
    }
}
let productData ;
if( localStorage.product != null ){
    productData = JSON.parse(localStorage.product);
} else {
    productData = [];
};

submit.onclick =  ()=>{
    let newProduct = {
        title : title.value.toLowerCase() ,
        price : price.value ,
        taxes : taxes.value ,
        ads : ads.value ,
        discount : discount.value,
        total : total.innerHTML ,
        count : count.value ,
        category : category.value.toLowerCase(),
    }
    if ( mode === 'creat'){
    if ( newProduct.count > 1 ){
        for ( let i = 0 ; i < newProduct.count ; i++){
            productData.push(newProduct);
        }
    }else{ productData.push(newProduct);}}
    else {
        productData[indx] = newProduct;
        mode = 'creat';
        submit.innerHTML = 'creat';
        count.style.display = 'block';
    }
   
    localStorage.setItem('product' , JSON.stringify(productData));
    // emptifying 
    ( function (){
        title.value = '';
        price.value = '';
        taxes.value = '';
        category.value = '';
        ads.value = '';
        discount.value = '';
        count.value = '';
        total.innerHTML = '';
    } ) ();
    showData()
}
function showData (){
    getTotal();
    let table = '';
    for ( let i = 0 ; i < productData.length  ; i++){
        table += `
        <tr>
                <td>${i}</td>
                <td>${productData[i].title}</td>
                <td>${productData[i].price}</td>
                <td>${productData[i].taxes}</td>
                <td>${productData[i].ads}</td>
                <td>${productData[i].discount}</td>
                <td>${productData[i].total}</td>
                <td>${productData[i].category}</td>
                <td><button onclick ="updateData(${i})" id="update">update</button></td>
                <td><button  onclick = "deleteData(${i})" id="delete">delete</button></td>
        </tr> 
        `
    }
    let deleteAll = document.getElementById('delete__all');
    document.getElementById('tbody').innerHTML = table ;
    if ( productData.length > 0 ){
        deleteAll.innerHTML = `
        <button  onclick ="deleteAllData()"  id="delete__all_btn" >delete all (${productData.length}) </button>
        `;
    } else {
        deleteAll.innerHTML = '';
    }
}
showData();
function deleteData(i){
    productData.splice(i , 1);
    localStorage.product = JSON.stringify(productData);
    showData();
}
function deleteAllData(){
    localStorage.clear();
    productData.splice(0);
    showData();
}
function updateData(i){
    title.value = productData[i].title;
    price.value = productData[i].price;
    taxes.value = productData[i].taxes;
    ads.value = productData[i].ads;
    discount.value = productData[i].discount;
    category.value = productData[i].category;
    getTotal();
    count.style.display = 'none';
    submit.innerHTML = 'update';
    mode = 'update';
    indx = i;
    scroll({ top :0 })
}
window.onscroll = ()=>{
    if (scrollY >= 400){
        scrollUp.style.height='40px';
        scrollUp.style.width='40px';
        arrowUp.style.display = 'block';
    }
    else {
        scrollUp.style.height='0';
        scrollUp.style.width='0';
        arrowUp.style.display = 'none';
    }
}
scrollUp.onclick = ()=>{
    scroll({
        left:0,
        top:0
    })
}
let searchMood = 'title';
function searchMode(id){
    if( id == 'search__title'){
         searchMood = 'title';
         searchBox.placeholder = 'Search BY Title';
         searchBox.focus()
    // console.log('okk')

    } else {
        searchMood = 'category';
        searchBox.placeholder = 'Search BY Category';
        searchBox.focus();
        // console.log('mii')
    }
    searchBox.value = '';
    showData();
}
function searchData(value){
    let table = '';
    if (searchMood == 'title'){
        for ( let i = 0 ; i < productData.length ; i++){
            if ( productData[i].title.includes(value.toLowerCase())){
                    table += `
                    <tr>
                            <td>${i}</td>
                            <td>${productData[i].title}</td>
                            <td>${productData[i].price}</td>
                            <td>${productData[i].taxes}</td>
                            <td>${productData[i].ads}</td>
                            <td>${productData[i].discount}</td>
                            <td>${productData[i].total}</td>
                            <td>${productData[i].category}</td>
                            <td><button onclick ="updateData(${i})" id="update">update</button></td>
                            <td><button  onclick = "deleteData(${i})" id="delete">delete</button></td>
                    </tr> 
                    `
                };
            }
        }
        else {
            for ( let i = 0 ; i < productData.length ; i++){
                if ( productData[i].category.includes(value.toLowerCase())){
                        table += `
                        <tr>
                                <td>${i}</td>
                                <td>${productData[i].title}</td>
                                <td>${productData[i].price}</td>
                                <td>${productData[i].taxes}</td>
                                <td>${productData[i].ads}</td>
                                <td>${productData[i].discount}</td>
                                <td>${productData[i].total}</td>
                                <td>${productData[i].category}</td>
                                <td><button onclick ="updateData(${i})" id="update">update</button></td>
                                <td><button  onclick = "deleteData(${i})" id="delete">delete</button></td>
                        </tr> 
                        `
                    };
                }
            }

    
    document.getElementById('tbody').innerHTML = table ;
}


// get total 
//creat product 
/// save items 
//clear inputs 
// table save 
//count 
// delete 
// update 
//search
// clean data 
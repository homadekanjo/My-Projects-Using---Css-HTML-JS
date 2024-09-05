let turn = 'x';
let title = document.getElementById('title');
let squaresContainer = document.getElementById('squares');
 function noWinner(){
     if(squares[1] !='' && squares[2] !='' && squares[3] !='' && squares[4] !='' && squares[5] !='' 
    && squares[6] !='' && squares[7] !='' && squares[8] !='' && squares[9] !=''
    ){title.innerHTML = 'reloading' ; setInterval(()=> {title.innerHTML+='.' } ,1500) ; setTimeout(()=> {location.reload()} ,4000 )};
}
const squares = [];
function winning(sq1 , sq2 , sq3 ){
    title.innerHTML = `${squares[sq1]} winner`;
    document.getElementById('item' +sq1).style.background = '#000';
    document.getElementById('item' +sq2).style.background = '#000';
    document.getElementById('item' +sq3).style.background = '#000';
    setInterval(  () =>{title.innerHTML += '.'},1000);
    setTimeout(() => {location.reload()} , 4000)
    squaresContainer.style.cssText =`
    pointer-events : none ;
    `
}
function winner(){
    for ( let i = 1 ; i<10 ;i++){
        squares[i] = document.getElementById('item'+i).innerHTML;
    }
    // horizontally compare
    if(squares[1] == squares[2] && squares[2] == squares[3] && squares[1] !=''){
        winning(1,2,3);
    }
    else if(squares[4] == squares[5] && squares[5] == squares[6] && squares[4] !=''){
        winning(4,5,6);
    }
    else if(squares[7] == squares[8] && squares[8] == squares[9] && squares[7] !=''){
        winning(7,8,9);
    }
    // vertically
    else if(squares[1] == squares[4] && squares[4] == squares[7] && squares[1] !=''){
        winning(1,4,7);
    }
    else if(squares[2] == squares[5] && squares[5] == squares[8] && squares[5] !=''){
        winning(2,5,8);
    }
    else if(squares[3] == squares[6] && squares[6] == squares[9] && squares[3] !=''){
        winning(3,6,9);
    }
    // cross
    else if(squares[1] == squares[5] && squares[5] == squares[9] && squares[1] !=''){
        winning(1,5,9);
    }
    else if(squares[3] == squares[5] && squares[5] == squares[7] && squares[7] !=''){
        winning(3,5,7);
    }
    noWinner();
    
}
function game(id){
    let card = document.getElementById(id);
    if ( turn === 'x' && card.innerHTML ==''){
        card.innerHTML = turn ;
        turn = 'o';
        title.innerHTML = 'o';
    }
    else if ( turn === 'o' && card.innerHTML == ''){
        card.innerHTML = turn ;
        turn = 'x';
        title.innerHTML = 'x';
    }
    winner();
}
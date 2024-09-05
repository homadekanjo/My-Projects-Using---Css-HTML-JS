 const calcField = document.getElementById('calc__field');
function solve(value){
const operators = ['*' , '/'  ];
const nonOperators = ['x' ,'÷'];
let empt = '';
for ( let i of value){
    if ( i == nonOperators[0]){
        empt += operators[0]
    }else if ( i == nonOperators[1] ){ empt += [operators[1]] }
     else { empt += i;}};
     return eval(empt);
}
function addCha(){
    calcField.value = this.value;
}
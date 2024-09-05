const Person = {
    firstName : 'Homade',
    lastName : 'Kanjo',
    language : 'AR',
    get  printName(){
        return this.firstName;
    } 
};
//object methods // /
Object.defineProperty(Person , 'birthYear' , {value : 2000});
Object.defineProperty(Person , 'getLang' , {get : function(){return this.language ;}});
Object.defineProperty(Person , 'setLang' , {set : function(newLang){ this.language = newLang ;}});
console.log(Person.birthYear);
console.log(Person.printName);
Person.setLang = 'TR';
console.log(Person.getLang);

// 1 
let Fn = new Function('a , b' , 'return a * 5 - b');

//2 

( function( x , y){
    console.log(x + y) ;
}

);
//
function myFun(...lis){
    return arguments.length;
};
console.log(myFun(1, 2 , 3, 4 ,5 ,6 , 7 ,7 ,8 ,8));
//--------------
console.log(myFun.toString());
//------------------
let arrFun = x  => x * 10;
let arrFun_2 = (x , y)  => x * 10 + y ;
let arrFun_3 = (x , y)  => { let rslt = x + y + y ; return rslt; } ;
console.log(arrFun( 8 )) ;
console.log(arrFun_2( 8 , 100 )) ;
console.log(arrFun_3( 8 , 10)) ;

//
function sumOF(...listOfNumbers){
    let res = 0 ;
    for ( let num of listOfNumbers){
        res += num;
    }
    return res;
}
///=----------------------------------------
const myListOfNum = [1, 2 , 4, 5, 6, 100];
console.log(sumOF(...myListOfNum));
function findMax(){
    let max = -Infinity;
    for( let i = 0; i < arguments.length ; i++){
        if( arguments[i] > max){
            max = arguments[i]
        }
    }
    return max;
}
console.log(findMax(1,2,3,4,10000));
//----
function gross(){
    let result = 0 ;
    for ( let num = 0 ; num < arguments.length ; num++){
        result += arguments[num];
    }
    return result;
}
console.log( gross(1, 2, 4, 1000) );

function fullName(){
    return this.firstName +' ' +this.lastName;
}

const Obj = {
    firstName : 'homade',
    lastName : 'kanjo'
};
const Obj2 = {
    firstName : 'Ahmed',
    lastName : 'kanjo'
}

class Car{ /// initializatin
    constructor(brand , model){
        this.brand = brand ;
        this.model = model ;

    }
    // display method 
    display(){
        return `the brand is ${this.brand} and the model is ${this.model} `;
    }
    /// get method
    get GetBrand(){
        return this.brand;
    }
    // set method
    static CarHello(x){
        return 'hello car classes' + ' '+ x.brand;
    }
};
const Car1 = new Car('BMW' , 2020);

class Volovo extends Car{
    constructor( brand , model , engineCap){
        super(brand , model) ;
        this.engineCap = engineCap;
    }
    show(){
        return `${this.display() } , the engine capacity is ${this.engineCap} HP`;
    }
}
const Volovo1 = new Volovo('volvo' , 2020 , 100);
console.log(Volovo1.show());
const Car3 = new Car('Mazda' , 2020);
console.log(Car.CarHello(Car3));

function display(d){
    console.log(d)
};
function Add( x , y , callBack){
    let sum = x + y ;
    callBack(sum);
}
Add(1 , 4 , display);
const myNumbers = [ 1 , 2 , 4 ,5 ,-7 , -100];

function removeNeg(list , callback){
    let Arr = [];
    for ( let i of list){
        if(callback(i)){
            Arr.push(i);
        }
    }
    return Arr;
}
console.log(removeNeg(myNumbers , (x) => x < 0 ))
function Timee(){
    let d = new Date();
    console.log(`${d.getHours()} : ${d.getMinutes()} : ${d.getSeconds()}`)
}
setInterval(Timee , 1000)
let myPromise = new Promise((myReslove , myRejcet) => {
    let y = 22 ;
    if(y == 0 ){
        myReslove('hello');
    } else {
        myRejcet('errror');
    }
});
myPromise.then(
    ( value ) => {console.log(value);} , 
    ( error ) => {console.log(error);}
);
 async function printHello(){
    return 'HELLO !!'
}
printHello().then(
    (value) => {console.log(value);},
    (error) => {console.log(error);}
)
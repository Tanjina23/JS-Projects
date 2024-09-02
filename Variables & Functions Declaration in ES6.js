//Variable declaration 
let x = 5;
if(true){
       
    let x = 6;
}

document.write(x +"<br>");

//constant variable
/*const y = -111;
 
y = 8;

console.log(y);*/

//string concatenation 
let n = 20;
let m = 30;

let sum = n + m;

document.write(`Sum is =  ${sum} <br>`);

//function declaration 
const sub = (s,t) =>{
    let sub = s - t;
    document.write(`Subtraction is = ${sub} <br>`);
}

sub(4,10);

//Hoisting & Strict Mode
k = 50;
document.write(`K is = ${k} <br>`);
var k;

//Strict Mode
"use strict"
 l = 10;
 console.log(`L is = ${l}`);

 
 //Default Parameter
 function message(text = "Hello! this is default parameter"){
     console.log(`${text}`);
 }
message();
message("I'm Learning JS");


//Rest Parameter
function summ(x,y,...z){
    console.log(`X = ${x}, Y = ${y}, Z = ${z}`);
}
summ(10,20,30,40,50,60,70,80);

//Spread Operator 

function addition(x,y,z){
    return x+y+z;
}

let vrb = [1,2,3];
console.log(addition(...vrb));

let st1 = [1,2,3];
let st2 = [4,5,6];
let re = [...st1,...st2];
console.log(re);

O1 = {
       name : "Smrity",
       age : 22
}

O2 = {
       Nationality : "Bangladeshi",
       Address : "Sylhet"
}

let O = {...O1,...O2};
console.log(O);

//Object Literals

//remove Duplication

function Info(name,age){
    return{
             name,
             age
    }
}
console.log(Info("abc",22));

//Consize Method
 sky = {
         'Body name'(){
             return 'This is Consize Method';
         }
 }
 console.log(sky['Body name']());

 // for of

 let names = ["a","b","c"];

 for(let nm of names ){
     console.log(nm);
 }

 //for in 

 let students = {
     name : "Tanjina",
     id : 27,
     age : 22.
 }
for(let x in students){
    console.log(`${x} : ${students[x]}`);
}

//for -each Method

var arr = [10,20,30,40,50];
/*var squareNm = [];
arr.forEach(function(x){
      squareNm.push(x*x);
})
console.log(squareNm);*/

console.log(arr);
arr.forEach(function(x,index,array){
     array[index] = x + 5;
})
console.log(arr);

// map & filter function

var nmb = [10,2,3,20,30,40,50,60,90,100,200,330,-1,-100];
var newNm = nmb.filter(function(x){
     return x>30;
});
/*var newNm = nmb.map(function(x){
     return x*x;
});*/
console.log(newNm);

// Arrow function

const arrFunc = () => "I am Arrow Function";

console.log(arrFunc());

const add1 = (x,y) => (x+y);
console.log(add1(10,20));
console.log(add1(40,50));

// map filter using Arrow Function 

var students_Info = [
    {
        id: 101,
        name: "Smrity",
        cgpa: 3.50
    },
    
    {
        id: 102,
        name: "Jyoti",
        cgpa: 2.90
    },

    {
        id: 103,
        name: "Prity",
        cgpa: 3.60
    },
]

 const studentsInfo = () => students_Info.filter((x) => x.cgpa > 3).map((y) => y.name);
 console.log(studentsInfo());
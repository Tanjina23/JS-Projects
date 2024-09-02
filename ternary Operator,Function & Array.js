/*var x = prompt("Enter a number : ");

var result = x > 0 ?  "Positive" : "negative"

document.write(result);


var x = Number(prompt("Enter a number : "));

x > 0 ? document.write("Positive" ) : x < 0 ? document.write("negative") : document.write("Zero")*/

// creating a function

function add(num){

    var result = num * num;
    document.write("Result is = " +result);

}

// calling function

add(5);

function addition (nm1, nm2){
    var ret = nm1 + nm2 ;
    return ret;
}
document.write("<br/>");
var r = addition(3,2);
document.write("Addition is = "+ r + "<br/>");

function subtraction (nm1, nm2){
    var ret = nm1 - nm2 ;
    return ret;
}
document.write("<br/>");
var r = subtraction(3,2);
document.write("Subtraction is = "+ r + "<br/>");

function Multiplication (nm1, nm2){
    var ret = nm1 * nm2 ;
    return ret;
}
document.write("<br/>");
var r = Multiplication(3,2);
document.write("Multiplication is = "+ r + "<br/>");


function division (nm1, nm2){
    var ret = nm1 / nm2 ;
    return ret;
}
document.write("<br/>");
var r = division(3,2);
document.write("Division is = "+ r + "<br/>");


// Array 
document.write("<br/>");
var nm1,nm2 , nm3 ;

nm1 = "abc", nm2 = "def", nm3 = "ghi";

var ary = [nm1, nm2, nm3];

document.write("Length of Array is  = "+ ary.length +"<br/>");

ary.push("Smrity")

document.write("Length of Array is after push = "+ ary.length + "<br/>");
document.write(" Array is = "+ ary);

// loop in array 

document.write("<br/>");

var num = [12,13,14,15,16]
var sum = 0, i ;

document.write("The Numbers are : ");

for ( i = 0; i < 5 ; i++){
      
    document.write( " " + num[i]);
    sum = sum + num[i];
}
document.write("<br/>");

document.write("Summation is = " +sum);

document.write("<br/>");

document.write("<h1> Array Methods </h1> <br/>");

var names = ["Jyoti","Smrity","Prity","Piya"];
document.write("Names = "+names+"<br/>");
document.write("<br/>");

//opposite of pop function
names.shift();
document.write("Names = "+names+"<br/>");
document.write("<br/>");

//opposite of push function

names.unshift("Tahrina");
document.write("Names = " +names+"<br/>");
document.write("<br/>");

//splice function add & remove elements from an array

names.splice(2,0,"Tasmina","Tasnia");
document.write("Names = " +names+ "<br/>");
document.write("<br/>");

//removing element

names.splice(2,2);
document.write("Names = " +names+ "<br/>");
document.write("<br/>");

//create new array 

var newArray = names.slice(1);
document.write("New Array = "+newArray+"<br/>");
document.write("<br/>");
document.write("Main Array = "+names+ "<br/>");
document.write("<br/>");

//sorting array 

names.sort();
document.write("After Sorting Names = " +names+ "<br/>");
document.write("<br/>");

//sorting number

var numbers = [1,100,30,-20,78,96,4,20];
 numbers.sort(function(a,b){
     return a-b;
 })
 document.write("Sorted Numbers = "+numbers+"<br/>");
 document.write("<br/>");

 numbers.sort(function(a,b){
    return b-a;
})
document.write("Sorted Numbers in Descending Order  :  "+numbers+"<br/>");
document.write("<br/>");





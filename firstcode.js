alert("This page contains javaScript Basics");

document.write("<h1>Bangladesh </h1><br>");
document.write("It is a South-Asian Country <br>");
document.write("Dense populated country <br>");
document.write("Bangladesh <br>");
console.log("I love Bangladesh");

document.write("<h1>Variables Declaration </h1><br>");

//Variables declaration

var name,age,countryName;

name = "Smrity" ;
age = 22;
countryName = "Bangladesh";

document.write(name);
document.write(age);
document.write(countryName);

document.write("<h1>Number Method, toFixed & toPrecision </h1><br>");


var num1 = "123";

var num2 = "edrftg5tumo";

var num3 = true;

var num4 = false;

document.write(typeof(Number(num1)));
document.write(num1);

console.log(typeof(Number(num1)));

console.log(typeof(Number(num2)));

console.log(Number(num3));

console.log(Number(num4));

var n1 = 12;
var n2 = 12.4367;

var n3 = parseFloat(n1); 
var n4 = parseInt(n2);
 //n2 = toString(n2);

console.log(n2.toFixed(2)); //fixed the number after point
console.log(n2.toPrecision(3)); // print number according to given length
console.log(n4);

document.write("<h1>String Concatenation </h1><br>");

document.write("Syeda" + "Tanjina" + "Khanam" + "Smrity <br>");

var st1 = "Sylhet is ";
var st2 = "a beautiful city.<br>";

document.write(st1+st2);

var fullName = "Syeda Tanjina Khanam";

document.write("My name is "+fullName+ " Smrity <br>");

var nm1 = 20, nm2 = 30;

document.write("Number 1 is = "+nm1+ " and Number 2 is = "+nm2);


document.write("<h1>Library Functions for String</h1><br>");

var text = "Bangladesh", text2 = " is a beautiful country";
//length
document.write("Length of given string is : "+text.length +"<br>")

//prompt
var text1 = prompt("Enter your name : ");
document.write("Number of character is : "+text1.length +"<br>");

//concatenation
var text3 = text.concat(text2);
document.write(text3 + "<br>");

//char at
text3 = text3.charAt(3);
document.write("Character is = " +text3 + "<br>");

//uppercase & lowercase
var text4 = "Greece is a heavenly country";
text4.toUpperCase();
document.write(text4 + "<br>");


//slice
var text5 = text4.slice(0,14);
document.write(text5);

//Arithmetic operator : +, -, /, * , ++, --, ** 
//Assignment Operator : =, ==, +=, -=, *=, /=
document.write("<h1>Arithmetic & Assignment Operator</h1><br>");

var x = 4;
x += 4;
document.write("Addition is : " + x +"<br>")
x -= 4;
document.write("Subtraction is : " + x +"<br>")
x *= 4;
document.write("Multiplication is : " + x +"<br>")
x /= 4;
document.write("Division is : " + x +"<br>")

// Calculator
document.write("<h1>Calculator </h1><br>");

var num1 = prompt("Enter first number : ");
var num2 = prompt("Enter Second number : ");
var sum,sub,mult,div,mod;

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);


sum = num1 + num2 ;
sub = num1 - num2;
mult = num1 * num2;
div = num1 / num2;
mod = num1 % num2;

document.write(num1 + " + " + num2 + " = " + sum + "<br/>");
document.write(num1 + " - " + num2 + " = " + sub + "<br/>");
document.write(num1 + " * " + num2 + " = " + mult + "<br/>");
document.write(num1 + " / " + num2 + " = " + div + "<br/>");
document.write(num1 + " % " + num2 + " = " + mod + "<br/>");


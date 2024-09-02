
//Areas of various shape
/* document.write("<h1>Calculate Areas </h1><br>");

var base = parseFloat(prompt("Enter a number : "));
var height = parseFloat(prompt("Enter a number : "));

var area;

area = base * height;

document.write("Area is = " + area + "<br/>");*/

/*document.write("<h1>Temperature Conversion </h1><br>");

var farn = parseFloat(prompt("Enter Fahrenheit : "));

var cels = (farn - 32) * (5/9);

document.write("Celsius is = " + cels+ "<br/>");

//Celsius to fahrenheit
var cels = parseFloat(prompt("Enter Celsius : "));

var faren = (cels * 9/5) + 32;

document.write("Fahrenheit is = " + faren+ "<br/>");

//Relational & Logical Operator

document.write("<h1>Relational & Logical Operator </h1><br>");

document.write("Relational Operator : <, >, <=, >=, ==, ===, !=, !== <br/>");
document.write("Logical Operator : &&, ||, | <br/>");

// Control Statement 

/*document.write("<h1>If, Else & If-else </h1><br>");

var nm = prompt("Enter a Number : ");

if(nm > 0)
document.write("The number is Positive <br/>");

else if(nm < 0)
document.write("The number is Negative <br/>");

else
document.write("The number is Zero <br/>");

document.write("<h1>If, Else & If-else </h1><br>");


var x = prompt("Enter your marks : ");

if( x >= 80 && x <= 100)
document.write("Grade : A+ <br/>")

else if( x >= 70 && x <= 79)
document.write("Grade : A <br/>")

else if( x >= 50 && x <= 69)
document.write("Grade : A- <br/>")

else if( x >= 40 && x <= 49)
document.write("Grade : B <br/>")

else if( x >= 30 && x <= 39)
document.write("Grade : C <br/>")

else
document.write("Grade : Fail <br/>")

document.write("<h1>Vowel or Consonent </h1><br>");

var char = prompt("Enter a Character : ");

if(char == 'a'|| char == 'e' || char == 'i' || char == 'o' || char == 'u' || char == 'A'|| char == 'E' || char == 'I' || char == 'O' || char == 'U')
document.write("Character is Vowel <br/>");

else
document.write("Consonent <br/>"); */


document.write("<h1> Switch </h1><br>");

var digit = prompt("Enter a digit : ");

switch (digit) {

    case '0':
        document.write("Zero <br/>")

    case '1':
        document.write("One <br/>")
        break;

    case '2':
        document.write("Two <br/>")
        break;

    case '3':
        document.write("Three <br/>")
        break;

    case '4':
        document.write("Four <br/>")
        break;

    case '5':
        document.write("Five <br/>")
        break;

    case '6':
        document.write("Six <br/>")
        break;

    case '7':
        document.write("Seven <br/>")
        break;

    case '8':
        document.write("Eight <br/>")
        break;

    case '9':
        document.write("Nine <br/>")
        break;
 
    default:
        document.write("Invalid Input <br/>");

}



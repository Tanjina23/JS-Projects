// for loop

var sum = 0, x;
for(x = 1 ; x <=100 ; x++){

    document.write(" " + x);

}

document.write("<br/>")
document.write("<br/>")

document.write("Odd Numbers are : ")

for(x = 1; x <= 99 ; x = x + 2){

    document.write(" " +x)

}

document.write("<br/>")
document.write("<br/>")


document.write("Even Numbers are : ")

for(x = 2; x <= 100 ; x = x + 2){

    document.write(" " +x)

}

document.write("<br/>")
document.write("<br/>")


/*var nm1 = parseInt(prompt("Enter first number : "));
var nm2 = parseInt(prompt("Enter Second  number : "))

for (x = nm1 ; x <= nm2 ; x++){

    sum = sum + x;

}

document.write("Summation is = " + sum + "<br/>")*/

// while loop

var i = 1 ;

while(i <= 100){

    if( i%3 == 0 && i % 5 == 0){
        document.write(" " + i);
        sum = sum + i;
    }
    i = i + 1;
}
document.write("<br/>")

document.write("Sum is = " +sum+ " <br/>");

//do while loop 

document.write("<br/>")
document.write("<br/>")

document.write("In reversing order : ")
var m = 100;
do{
    document.write(" " + m);
    m--;
}while(m >= 1)
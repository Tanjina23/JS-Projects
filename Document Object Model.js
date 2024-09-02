
document.getElementById("header1").innerHTML="Hello Wrold!";

var mypara = document.getElementById("para")
mypara.innerHTML = "It is a Overpopulated country";

document.getElementsByClassName("header2")[0].innerHTML = "Twinkle Star";

document.getElementsByTagName("p")[1].innerHTML = " Turkey, Greece, Vanice.......";

//querySelector

document.querySelector("li a").innerHTML="Tutorial 3";
document.querySelector("li a").innerHTML = " Tutorial 4";

document.querySelector("p")[0].innerHTML = "This is beginner Javascript";

var heading3 = document.createElement("h2");
var text = document.createTextNode("This is Header 3");
heading3.appendChild(text);

var myHeader = document.getElementById("myDiv");
myHeader.appendChild(heading3);
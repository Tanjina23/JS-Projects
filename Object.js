// Creating a Object

/*var Student1 = {
    
    name : "Smrity",
    age : 22,
    BloodGroup : "A+"

}

var Student2 = {
    
    name : "Jyoti",
    age : 17,
    BloodGroup : "O+"

}

document.write(Student1.name+" "+Student1.age+" "+Student1.BloodGroup+"<br/>");

document.write(Student2.name+" "+Student2.age+" "+Student2.BloodGroup+"<br/>");*/

//creating constructor 

/*function Student(name,age,BloodGroup){
    this.name = name;
    this.age = age;
    this.BloodGroup = BloodGroup;

    // creates a function to display objects
    this.display = function(){
       document.write(this.name);
       document.write(this.age);
       document.write(this.BloodGroup);
    }
}

var Student1 = new Student("Smrity",22,"A+");
var Student2 = new Student("Jyoti",17,"O+");

Student1.display();
Student2.display();

//Math Objects

/*var nm1 = parseInt(prompt("Enter First Number : "));
var nm2 = parseInt(prompt("Enter Second Number : "));

var maximum = Math.max(nm1,nm2);

console.log("Maximum Number is = "+maximum);*/

//guessing game

var wonTimes = 0, lostTimes = 0;

for(var i = 1 ; i <= 5 ; i++){

var guessnumber = parseInt(prompt("Enter a number between 1 to 5"));

var randomNumber = Math.floor(Math.random() * 5) + 1 ;

if(guessnumber == randomNumber){
    console.log("You have won !");
    wonTimes++;
}

else{
       console.log("Oops! you have lost");
       console.log("Random number was : "+randomNumber);
       lostTimes++;
}
}

document.write("You have won "+wonTimes+" times <br/>");
document.write("You have lost "+lostTimes+" times <br/>");

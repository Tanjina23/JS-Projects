
console.log('Object Literals and Constructor');

//Object Literals for creating Object

let car = {
    name : "Nano",
    topSpeed: 200,
    run : function (){
           console.log('Car is running');
    }
}

//Creating a constructor for cars

function generalCar(giveName, giveSpeed){
   this.name = giveName;
   this.speed = giveSpeed;
   this.run = function(){
      console.log(`${this.name} is running`);
   }
   this.analyze = function(){
      console.log(`This car is slower by ${200 - this.speed} than Mercedes`);
   }
}
car1 = new generalCar('Maruti Sujuki',100);
car2 = new generalCar('Nano',180);

console.log(car1);
console.log(car2);
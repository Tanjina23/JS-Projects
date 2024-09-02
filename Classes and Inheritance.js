console.log('Object Oriented Programming');

class person{
    constructor(givenName,givenPosition,givenSalary){
         this.name = givenName;
         this.position = givenPosition;
         this.salary = givenSalary;
    }

    static add(a,b){
        return a+b;
    }
}

Abigel = new person('Abigel','WebDev',120000);
console.log(Abigel);
//console.log(person.add(10,20));

class programmer extends person{
    constructor(givenName,givenPosition,givenSalary,Language,Github){
        super(givenName,givenPosition,givenSalary);
        this.language = Language;
        this.github = Github;
    }
    favouriteLanguages(){
        if(this.language == 'C'){
            return 'C';
        }
        else{
            return 'JavaScript';
        }
    }

    static multiply(a,b){
        return a*b;
    }
}

Rayan = new programmer('Rayan','Programmer',234000,'C','darkProgrammer');
console.log(Rayan);
console.log(Rayan.favouriteLanguages());
console.log(programmer.add(24,39));
console.log(programmer.multiply(100,5));
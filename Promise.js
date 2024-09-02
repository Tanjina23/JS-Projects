
console.log('JavaScript Promise');

function func1(){
    return new Promise(function(resolve,reject){
        setTimeout(() => {
            let age = 10;
            if(age == 18){
                console.log('You are eligible for voting');
                resolve();
            }
            else{
                   console.log('You are not eligible for voting');
                   reject();
            }
        }, 2000);
    }
    )
}

func1().then(function(){
    console.log("Thanks for Voting");
}).catch(function(error){
    console.log('Sorry! You are not eligible for voting. Reason: ',+error);
})
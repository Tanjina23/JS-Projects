
console.log('Ajax Tutorial');

let btn1 = document.getElementById('btn');

btn1.addEventListener('click',fatchData);

function fatchData(){
    console.log(`You've clicked the button`);

    const xhr = new XMLHttpRequest();

    xhr.open('get','STKS.txt',true);

    xhr.onprogress = function(){
        console.log('On progress');
    }

    xhr.onreadystatechange = function(){
        console.log('Ready state is : ',xhr.onreadystatechange);
    }

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText);
        }
        else{
             console.log('Server Error');
        }
    }

    xhr.send();

    // console.log('We are done');
}
var photos = ["beach.jpg","Snow.jpg","Green Sky.jpg","Starry Night.jpg","Winter.jpg"];
var imgtag = document.querySelector("img");

var count = 0;

function next(){
    count++;
     
    if(count >= photos.length){
        count = 0;
        imgtag.src = photos[count];
    }
    else{
           imgtag.src = photos[count];
    }

}

function prev(){
     count--;

    if(count < 0){
        count = photos.length - 1;
        imgtag.src = photos[count];
    }
    else{
          imgtag.src = photos[count];
    }

}

var para = document.querySelector("#para1");

function addStyle(){
    para.classList.add("Para-Style");
}

function removeStyle(){
    para.classList.remove("Para-Style");
}
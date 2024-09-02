var eventListener = document.querySelector("p");

eventListener.addEventListener("mouseover", function () {
    eventListener.classList.add("p-style");
});

eventListener.addEventListener("mouseout", function () {
    eventListener.classList.remove("p-style");
});


var len = document.querySelectorAll(".Button").length;

for (var i = 0; i < len; i++) {
    document.querySelectorAll(".Button")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " " + "is Clicked";
    });
}


var len = document.querySelectorAll(".Bt").length;

for (var i = 0; i < len; i++) {
    document.querySelectorAll(".Bt")[i].addEventListener("click", function () {
        var text = this.innerHTML;

        AudioPlay(text);
        PlayAnimation(text);
    });
}

//keypress Listener 

document.addEventListener("keypress",function(event){
       var text = event.key;
       AudioPlay(text);
       PlayAnimation(text);
})


function AudioPlay(text) {
    switch (text) {
        case "A":
            var audio = new Audio("a.wav");
            audio.play();
            break;
        case "B":
            var audio = new Audio("b.wav");
            audio.play();
            break;
        case "C":
            var audio = new Audio("c.wav");
            audio.play();
            break;
    }
}

function PlayAnimation(text){

    var selectedButton = document.querySelector("."+text);
    selectedButton.classList.add("anim");

    setTimeout(function(){
        selectedButton.classList.remove("anim");
    },1000);
}

//keyPress Listener

  var count = 0;
document.querySelector("textarea").addEventListener("keypress",function(event){
      count++;
      var text = event.key;
      document.querySelector("h2").innerHTML = "You have Pressed " + count;
});
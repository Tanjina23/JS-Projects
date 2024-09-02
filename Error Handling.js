try{
      alert("Hello WOrld!");
      alert(x);
      alert("Hello Bangladesh");
}
catch(err){
      //  alert("Hello Sylhet");
      //  document.write(err);
}

finally{
           alert("Hello People!");
}

document.querySelector("#checkButton").addEventListener("click",function(){
    var num = document.querySelector("#text1").value;
    try{
    if(num < 5){
            throw "input is too low";
    }
    else if(num > 10){
         throw "input is too high";
    }
}
    catch(err){
            document.write(err);
    }
})
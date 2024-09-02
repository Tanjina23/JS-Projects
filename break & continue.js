var i ;

// break

document.write("Break")
document.write("<br/>");
for(i = 1 ; i <= 100 ; i++){
      if(i == 10){
          break;
      }

      document.write(" " + i);
}

//continue

document.write("<br/>");
document.write("<br/>");

document.write("Continue")
document.write("<br/>");
for(i = 1 ; i <= 100 ; i++){
    if(i == 10){
        continue;
    }

    document.write(" " + i);
}

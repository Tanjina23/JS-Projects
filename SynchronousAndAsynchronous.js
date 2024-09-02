
console.log('Synchronus And Asynchronus Programming');

// Synchronus Programming
for(i = 1; i<= 200; i++){
    console.log(i);
}
 
console.log('This is Synchronus Programming');

// Asynchronus Programming

setTimeout(() => {
    for(i = 1; i<= 200; i++){
        console.log(i);
    }
}, 100);

console.log('This is Asynchronus Programming');
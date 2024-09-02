
console.log('Regular Expression');

let reg = /Smrity/  //This is Regular Expression's literal

//  reg = /Smrity/g  // g for global regular expression

//  reg = /Smrity/i  // i for case insensitive

console.log(reg);
console.log(reg.source);

let str = "Smrity and SMrIty is the best person in the whole universe";

let result = reg.exec(str);
// console.log(result);
// //console.log(result.input);
// let result1 = reg.exec(str);
// console.log(result1);

//in search function if matched then return index else -1
// let result2 = str.search(reg);
// console.log(result2);

//replace 
let result3 = str.replace(reg,'Tanjina');
console.log(result3);

     // MetaCharacters
// /^Smrity/  ^ matches starting character 
// /Smrity$/  $ matches ending character
// /Sm.rity/  . matches any one character
// /S*mrity/  * matches 0 or more character
// /Sm?rity?/  ? matches 0 or more character
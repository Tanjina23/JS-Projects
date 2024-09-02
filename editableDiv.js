let elem = document.createElement('div');
elem.id = 'div1';

let val = localStorage.getItem('text');
let text;
if(val == null){
     text = document.createTextNode('This is my editable div');
}

else{
       text = document.createTextNode(val);
}

elem.appendChild(text);
console.log(elem);

let head = document.getElementById('heading');
console.log(head);
head.appendChild(elem);

elem.setAttribute('style', 'border : 2px solid maroon; margin: 5px; padding: 10px; width: 300px;');

elem.addEventListener('click', function(){
    let textArea = document.getElementsByClassName('textarea').length;
    if(textArea == 0){
    let html = div1.innerHTML;
    elem.innerHTML = `<textarea class='textarea' id='textarea' rows = '3'>${html}</textarea>`;
    }

let txt = document.getElementById('textarea');
txt.addEventListener('blur',function(){
    div1.innerHTML = txt.value;
    localStorage.setItem('text',div1.innerHTML);
})

})
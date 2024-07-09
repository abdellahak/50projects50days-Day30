let textContainer = document.querySelector('#text');
let speedInput = document.querySelector('#speed');
let text = textContainer.innerText;
textContainer.innerText ='';
let counter =1;
let speed = 300 /speedInput.value;
function showLetters(){
    textList = text.split('');
    if(speed == 3000){
        speed = 300/speedInput.value
    }
    let tempText = textList.slice(0,counter).join('');
    textContainer.innerText = tempText;
    counter++;
    if(counter>textList.length){
        counter =1;
        speed = 3000;
    }
    setTimeout(showLetters, speed)
}

function addLetter(letter){
        textContainer.innerText += letter;
}

showLetters();
speedInput.onchange = function(){
    speed = 300 / speedInput.value;
}
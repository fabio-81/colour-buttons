//find the element with the id #red
let $btnRed = document.querySelector('#red')

//find the element with the id #blue
let $btnBlue = document.querySelector('#blue')

//find the element with the id #green
let $btnGreen = document.querySelector('#green')

//find the body element
let $body = document.querySelector('body')


//make the button clickable

//function makeBodyRed(){
//apply the red colour to the body as a background colour
//$body.style.backgroundColor = 'red'

//}
function makeBodyRed(){
    $body.style.backgroundColor = 'red'
}


//connect a function to the occurence of an event
//1.who am I watching? btnRed
//2.what am I waiting for ? click
//3.what do I do when it happens? makeBodyRed

$btnRed.addEventListener('click', makeBodyRed)
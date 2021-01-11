const description = document.querySelector('p');
description.textContent = "Ryu is the protagonist of the Street Fighter series. He's a martial artist."

let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc == '../ryu.png')
        myImage.setAttribute('src', '../images/shoryuken.png');
    else
        myImage.setAttribute('src', '../ryu.png');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your user name.');
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Welcome ' + storedName;
}

myButton.onclick = function (){
    setUserName();
}

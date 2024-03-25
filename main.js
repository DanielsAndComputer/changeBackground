

let imgBackground =document.getElementsByClassName('img')[0];
let backgroundEl = document.getElementsByClassName('background')[0];

// the total background that i have
let backgrounds = [
    "url('./images/1.jpg')",
    "url('./images/2.jpg')",
    "url('./images/3.jpg')",
    "url('./images/4.jpg')",
    "url('./images/5.jpg')",
    "url('./images/6.jpg')",
    "url('./images/7.jpg')",
    "url('./images/8.jpg')",
    "url('./images/9.jpg')",
    "url('./images/10.jpg')",
    "url('./images/11.jpg')",
    "url('./images/12.jpg')",
    "url('./images/13.jpg')",
    "url('./images/14.jpg')",
    "url('./images/15.jpg')",
    "url('./images/16.jpg')",
    "url('./images/17.jpg')",
    "url('./images/18.jpg')",
]

function randomNum(){
    return Math.floor(Math.random() * backgrounds.length)
}


function backgroundChanger(a) {
    imgBackground.style.background = backgrounds[a]
    imgBackground.style.backgroundColor = '#000';
    imgBackground.style.backgroundPosition = "center";
    imgBackground.style.backgroundRepeat = "no-repeat";
    imgBackground.style.backgroundSize ="cover";
    imgBackground.style.position = "relative";
}

backgroundEl.addEventListener('click', function(){
    let i = randomNum();
    backgroundChanger(i)


})
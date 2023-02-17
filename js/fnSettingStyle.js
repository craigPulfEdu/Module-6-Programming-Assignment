// filename: fnSettingStyle
// Function is to increase the size of text in the body

function enlargeText() {
    document.getElementById("p1").style.fontSize = "5em";
    document.getElementById("p2").style.fontSize = "7em";
    document.getElementById("p3").style.fontSize = "4em";
    document.getElementById("p4").style.fontSize = "10em";
    document.getElementById("p5").style.fontSize = "4em";
}

function decreaseText() {
    document.getElementById("p1").style.fontSize = "2em";
    document.getElementById("p2").style.fontSize = "2em";
    document.getElementById("p3").style.fontSize = "2em";
    document.getElementById("p4").style.fontSize = "1em";
    document.getElementById("p5").style.fontSize = "1em";
    
}

function increaseHeading() {
    document.getElementById("h1").style.fontSize = "10em";
    document.getElementById("h2").style.fontSize = "7em";
}

function decreaseHeading() {
    document.getElementById("h1").style.fontSize = "3em";
    document.getElementById("h2").style.fontSize = "2em";
}
    
function getInputValue(){ 

    var inputVal = document.getElementById("myInput").value;
    
    if (inputVal == "042") {
        window.location.replace("hack4.html");
    }
    else {
        window.location.replace("failpage.html");
    }
    
}
function getInputValue1(){
    var inputVal1 = document.getElementById("myInput1").value;
    if (inputVal1 == "d"){
        window.location.replace("hack5.html");
    }
    else {
        window.location.replace("failpage.html");
    }
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};


setTimeout( function ( ) { 

    if (window.confirm('You ran out of time. Head back home and try again.')) 
    {
    window.location.href='hack.html';
    };; }, 300000);
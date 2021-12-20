console.log("page loading...");

var cookieDiv = document.querySelector(".cookie-policy");

function loading() {
    alert("Loading weather report...")
}

function accept() {
    cookieDiv.remove();
}

function CtoF(temp) {
    return Math.round(9 / 5 * temp + 32);
}

function FtoC(temp) {
    return Math.round(5 / 9 * (temp - 32));
}

function convert(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var tempSpan = document.querySelector("#temp" + i);
        var tempVal = parseInt(tempSpan.innerText);
        if(element.value == "°C") {
            tempSpan.innerText = FtoC(tempVal);
        } else {
            tempSpan.innerText = CtoF(tempVal);
        }
    }
}
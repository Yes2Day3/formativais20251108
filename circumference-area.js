const inputField = document.getElementById("radius")
const calcButton = document.getElementById("calc-button")
const outputField = document.getElementById("output")
let selection = document.getElementById("selection")

calcButton.addEventListener("click", clickHold)
function clickHold(){
    if(selection.value == "C"){
        outputField.innerHTML = 2 * 3.14 * inputField.value
    }
    else if(selection.value == "S"){
        outputField.innerHTML = 3.14 * inputField.value * inputField.value
    }
    else{
        outputField.innerHTML = "Izvēlieties darbību."
    }
}
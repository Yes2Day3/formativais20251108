const first = document.getElementById("num1");
const second = document.getElementById("num2");
const calcButton = document.getElementById("calc-button");
const output = document.getElementById("output");
let mathFunct = document.getElementById("math-funct");

calcButton.addEventListener("click", clickHold);
function clickHold(){
    if(mathFunct.value == "mult"){
        output.innerHTML = first.value * second.value
}
   else if(mathFunct.value == "div"){
        output.innerHTML = first.value / second.value
}
    else{
        output.innerHTML = "Izvēlieties darbību."
    }
};

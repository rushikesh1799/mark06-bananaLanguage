var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");



// console.log("Hello");

function handleClick() {
    // console.log(txtInput.value)
    outputDiv.innerText = txtInput.value
}

btnTranslate.addEventListener("click", handleClick)
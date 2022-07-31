var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

// console.log("Hello");

function handleClick() {
    console.log(txtInput.value)
}

btnTranslate.addEventListener("click", handleClick)
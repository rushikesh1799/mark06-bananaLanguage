var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURl(text) {
    return serverURL + "?" + "text=" + text;
}

// getTranslationURl("Hello")

// console.log("Hello");

function errorHandler(error) {
    console.log("error occured", error)
    alert("something wrong with the server! please try again after some time")
}

function handleClick() {
    // console.log(txtInput.value)
    // outputDiv.innerHTML = txtInput.value
    fetch(getTranslationURl(txtInput.value))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(err => console.log(err))
}

btnTranslate.addEventListener("click", handleClick)


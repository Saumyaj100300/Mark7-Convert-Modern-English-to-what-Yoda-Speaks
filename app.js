var button = document.querySelector(".btn-translate");
var textarea = document.querySelector("#input-textarea");
var output = document.querySelector(".output-div");

var serverUrl ='https://api.funtranslations.com/translate/yoda.json';

function constructUrl(text){
    return serverUrl+ "?" + "text=" + text;
}

function errorHandler(error){
    console.log("Error occured: "+ error);
    alert("Error occured please try after sometime");
}

function clickHandler(){
    fetch(constructUrl(textarea.value))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        output.innerText = translatedText})
    .catch(errorHandler)
}

button.addEventListener("click", clickHandler);
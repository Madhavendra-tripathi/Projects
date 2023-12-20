let btn = document.getElementById("btn");
let txt = document.getElementById("txt");

btn.addEventListener("click", () => {
    let speech = new SpeechSynthesisUtterance(txt.value);
    speechSynthesis.speak(speech);
});
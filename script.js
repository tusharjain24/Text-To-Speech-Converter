const speech = new SpeechSynthesisUtterance();
const textArea = document.querySelector("#textarea");

let voices = [];
let selectVoice = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices(); // Will provide all the voices available on the device
  speech.voice = voices[0];
  selectVoice.innerHTML = ""; // Clear any existing options
  voices.forEach((voice, i) => {
    let option = new Option(voice.name, i);
    selectVoice.options.add(option);
  });
};

const button = document.querySelector("button");
button.addEventListener("click", () => {
  speech.voice = voices[selectVoice.value]; // Set the selected voice
  speech.text = textArea.value;
  window.speechSynthesis.speak(speech);
});

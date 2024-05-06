// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  window.speechSynthesis.onvoiceschanged = function() {
    var voices = window.speechSynthesis.getVoices();
    // console.log(voices);
    const voiceSelect = document.getElementById('voice-select');
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }

    const text = document.getElementById("text-to-speak");
    console.log(text);

    const button = document.querySelector("button");

    button.addEventListener("click", function() {
      window.speechSynthesis.cancel();
      // console.log("Button clicked");
      const utterThis = new SpeechSynthesisUtterance(text.value);
      const selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === selectedOption) {
          utterThis.voice = voices[i];
        }
      }
      const image = document.querySelector("img");
      image.src = "assets/images/smiling-open.png";
      window.speechSynthesis.speak(utterThis);
      utterThis.addEventListener("start", function() {
        image.src = "assets/images/smiling-open.png";
      })
      utterThis.addEventListener("end", function() {
        image.src = "assets/images/smiling.png";
      })
    });
  };



}
// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  //change image based on option in bar
  const select = document.getElementById('horn-select')
  const audio = document.querySelector('audio.hidden')
  const audiobutton = document.querySelector('button')
  const jsConfetti = new JSConfetti();

  select.addEventListener("change", function(){
    const imageElement = document.querySelector('img[alt="No image selected"]');
    const option = select.value;
    
    
    if (option == "air-horn"){
      imageElement.src = "assets/images/air-horn.svg";
      audio.src = 'assets/audio/air-horn.mp3';
    }
    if (option == "car-horn"){
      imageElement.src = "assets/images/car-horn.svg";
      audio.src = "assets/audio/car-horn.mp3";
    }
    if (option == 'party-horn'){
      imageElement.src = "assets/images/party-horn.svg";
      audio.src = "assets/audio/party-horn.mp3";

    }

  });

  audiobutton.addEventListener("click", function(){
    if (select.value == 'party-horn'){
      
      jsConfetti.addConfetti();
      audio.play();
      jsConfetti.clearCanvas();
    }
    audio.play();

    
  });

  const volume = document.getElementById('volume');
  const volumeimg = document.querySelector('img[alt="Volume level 2"]');

  volume.addEventListener("input", function(){
    
    const volumelevel = volume.value / 100;
    audio.volume = volumelevel;
    if (volume.value == 0){
      volumeimg.src = "assets/icons/volume-level-0.svg"
    }
    else if (1<=volume.value<33){
      volumeimg.src = "assets/icons/volume-level-1.svg"
    }
    else if (33<=volume.value < 67){
      volumeimg.src = "assets/icons/volume-level-2.svg"
    }
    else{
      volumeimg.src = "assets/icons/volume-level-3.svg"
    }

  });



}
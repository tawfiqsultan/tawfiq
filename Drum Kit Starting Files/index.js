var numper_of_drum_buttons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numper_of_drum_buttons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", handleclick);
}

function handleclick() {
  var buttoninnerHTML = this.innerHTML;
  makesound(buttoninnerHTML);
  buttoninnemation(buttoninnerHTML);
}

document.addEventListener("keypress", function (event) {
  makesound(event.key);
  buttoninnemation(event.key);
});

function makesound(keypress) {
  switch (keypress) {
    case "w":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var bas = new Audio("./sounds/kick-bass.mp3");
      bas.play();
      break;
    case "s":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "j":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;
    case "l":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;
    default:
      break;
  }
}

function buttoninnemation(buttonpress) {
    var buttonpresed = document.querySelector("." + buttonpress);
    buttonpresed.classList.add("pressed");

    setTimeout(function () {
        buttonpresed.classList.remove("pressed");
    }, 100);
}

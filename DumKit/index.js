//make all Buttons working
var buttons = document.querySelectorAll("button")
for (i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", handleClick);
}

//added Key Listener for Keydown Events
document.addEventListener("keydown", handleKeyPressed);


function handleKeyPressed() {
  //The Function Checks if a correct key is pressed and plays the Corrosping Sound
  //All correct Inputs
  correctInputs = ["w", "a", "s", "d", "j", "k", "l"]

  //Checks if correct key is pressed
  if (correctInputs.includes(event.key)) {
    buttonInnerHTML = event.key;
  } else {
    //If Wrong Button got Pressed --> going to Lead to error Sound
    buttonInnerHTML = "empty";
  }
  playSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML)
}

//function called by Buttons
function handleClick() {
  //The function checks if a button got Clicked
  var buttonInnerHTML = this.innerHTML;
  playSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML)
}

function playSound(buttonInnerHTML) {
  //The function plays a sound depending on the input
  //Chose whitch sound to play
  switch (buttonInnerHTML) {
    case "w":
      var beat = new Audio("sounds/crash.mp3");
      break;

    case "a":
      var beat = new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      var beat = new Audio("sounds/snare.mp3");
      break;

    case "d":
      var beat = new Audio("sounds/tom-1.mp3");
      break;

    case "j":
      var beat = new Audio("sounds/tom-2.mp3");
      break;

    case "k":
      var beat = new Audio("sounds/tom-3.mp3");
      break;

    case "l":
      var beat = new Audio("sounds/tom-4.mp3");
      break;

    default:
      var beat = new Audio("sounds/erro.mp3");
      break;
  }
  //Plays Sound
  beat.play();
}

function buttonAnimation (buttonInnerHTML) {
  //Animation für den Button
  if (buttonInnerHTML != "empty"){
    var lastInput = document.querySelector("."+buttonInnerHTML);
    lastInput.classList.add("pressed");
    setTimeout(function(){
      lastInput.classList.remove("pressed")}, 100)
  }
}

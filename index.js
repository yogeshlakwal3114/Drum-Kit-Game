
// Detecting button Press

var numberOfDrumsButton = document.querySelectorAll(".drum").length; // document.querySelectorAll(".drum") is array!

for (i = 0; i < numberOfDrumsButton; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHtml = this.innerHTML;    // this is use for calling every words who inside in array button.

    makeSound(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);

  });

}


//Detecting Keyboard Press

document.addEventListener("keypress", function(event){

  makeSound(event.key);

  buttonAnimation(event.key);

});



function makeSound(key){

  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      let kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:console.log(buttonInnerHtml);

  }
}


function buttonAnimation(currentKey){

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

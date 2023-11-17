var numberOfButtons = document.querySelectorAll(".drum").length;

function playAudio(key) {
  switch (key) {
    case "d":
      var dor = new Audio('/sounds/do.mp3');
      dor.play();
      break;
    case "f":
      var re = new Audio('/sounds/re.mp3');
      re.play();
      break;
    case "g":
      var mi = new Audio('/sounds/mi.mp3');
      mi.play();
      break;
    case "h":
      var fa = new Audio('/sounds/fa.mp3');
      fa.play();
      break;
    case "j":
      var sol = new Audio('/sounds/sol.mp3');
      sol.play();
      break;
    case "k":
      var lya = new Audio('/sounds/lya.mp3');
      lya.play();
      break;
    case "l":
      var si = new Audio('/sounds/si.mp3');
      si.play();
      break;
    case ";":
      var do1 = new Audio('/sounds/do.mp3');
      do1.play();
      break;
      case "в":
      var dor = new Audio('/sounds/do.mp3');
      dor.play();
      break;
    case "а":
      var re = new Audio('/sounds/re.mp3');
      re.play();
      break;
    case "п":
      var mi = new Audio('/sounds/mi.mp3');
      mi.play();
      break;
    case "р":
      var fa = new Audio('/sounds/fa.mp3');
      fa.play();
      break;
    case "о":
      var sol = new Audio('/sounds/sol.mp3');
      sol.play();
      break;
    case "л":
      var lya = new Audio('/sounds/lya.mp3');
      lya.play();
      break;
    case "д":
      var si = new Audio('/sounds/si.mp3');
      si.play();
      break;
    case "ж":
      var do1 = new Audio('/sounds/do.mp3');
      do1.play();
      break;
    default:
      console.log(key);
  }
}

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playAudio(buttonInnerHTML);
  });
}

document.addEventListener("keydown", function(event) {
  playAudio(event.key);
});

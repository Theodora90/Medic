// Text Animation
var textOne = "We Provide Best";
var myArrayOne = textOne.split("");
var loopTimer;
function frameLooper() {
  if (myArrayOne.length > 0) {
    document.getElementById("animation").innerHTML += myArrayOne.shift();
  } else {
    clearTimeout(loopTimer);
    return false;
  }
  loopTimer = setTimeout("frameLooper()", 160);
}
frameLooper();

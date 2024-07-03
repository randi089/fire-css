let audio = document.querySelector(".audio");
let text = document.querySelector(".text");

document.addEventListener("click", function () {
  text.classList.toggle("toggle");
  audio.play();
});

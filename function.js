var slides = document.querySelectorAll("#slides .slide");
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 6000);

function nextSlide() {
  slides[currentSlide].className = "slide";
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].className = "slide showing";
}
//
// var pause = false;
// var pauseButton = document.getElementById("pause");
//
// function pauseSlideshow() {
//   pauseButton.innerHTML = "play";
//   pause = true;
//   clearInterval(slideInterval);
// }
//
// function playSlideshow() {
//   pauseButton.innerHTML = "pause";
//   pause = false;
//   slideInterval = setInterval(nextSlide, 2000);
// }
//
// pauseButton.onclick = function() {
//   if(pause) {
//     playSlideshow();
//   } else {
//     pauseSlideshow();
//   }
// };

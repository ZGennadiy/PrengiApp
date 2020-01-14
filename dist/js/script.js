var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider__item");
  var bullets = document.getElementsByClassName("slider__bullet");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < bullets.length; i += 1) {
      bullets[i].className = bullets[i].className.replace(" slider__bullet_active", "");
  }
  slides[slideIndex-1].style.display = "block";
  bullets[slideIndex-1].className += " slider__bullet_active";
}
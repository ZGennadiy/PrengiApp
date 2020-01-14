let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider__item");
  let bullets = document.getElementsByClassName("slider__bullet");
  let tabs = document.getElementsByClassName("slider__tab");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i += 1) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < bullets.length; i += 1) {
      bullets[i].className = bullets[i].className.replace(" slider__bullet_active", "");
  }
  for (i = 0; i < tabs.length; i += 1) {
      tabs[i].className = tabs[i].className.replace(" slider__tab_active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  bullets[slideIndex - 1].className += " slider__bullet_active";
  tabs[slideIndex - 1].className += " slider__tab_active";
}
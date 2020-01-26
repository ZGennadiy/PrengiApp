document.addEventListener('DOMContentLoaded', function() {
  
  /* start lib closest - allow to find closest parent https://github.com/jonathantneal/closest */
  !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);
  /* end lib closest - allow to find closest parent https://github.com/jonathantneal/closest */
  
  
  let modalButtons = document.querySelectorAll('#openModal');
  let overlay = document.querySelector('#overlayModal');
  let closeButtons = document.querySelectorAll('#closeModal');

  modalButtons.forEach(function(item){
      
    item.addEventListener('click', function(e) {
       
       e.preventDefault();
       let modalId = this.getAttribute('data-modal'),
           modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
       
       modalElem.classList.add('modal__active');
       overlay.classList.add('overlay__active');
    });
  });

  closeButtons.forEach(function(item){
    item.addEventListener('click', function(e) {
       let parentModal = this.closest('.modal');
       parentModal.classList.remove('modal__active');
       overlay.classList.remove('overlay__active');
    });
 });

//slider
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
});
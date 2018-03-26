// Event for when the form is submitted
$('form').on('submit', function(event) {
  event.preventDefault();

  var email = $('#email').val();
  var name = $('#name').val();
  var message = $('#message').val();


  if (!name) {
    alert('Please enter name');
    $('#name').addClass('warn');
  } else {
    $('#name').removeClass('warn');
    alert('Submitted!');
  }

  if (!email) {
    alert('Please enter email');
    $('#email').addClass('warn');
  } else {
    $('#email').removeClass('warn');
    alert('Submitted!');
  }
  if (!message) {
    alert('Please enter message');
    $('#message').addClass('warn');
  } else {
    $('#message').removeClass('warn');
    alert('Submitted!');
  }
});


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

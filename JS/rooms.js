let slideIndex = [1, 1];
// Call showSlides() after the page has loaded
window.addEventListener("load", function() {
  showSlides(slideIndex[0], 0);
  showSlides(slideIndex[1], 1);
});

// Next/previous controls
function plusSlides(n, index) {
  showSlides(slideIndex[index] += n, index);
}

// Thumbnail image controls
function currentSlide(n, index) {
  showSlides(slideIndex[index] = n, index);
}

function showSlides(n, index) {
  let i;
  let slides = document.getElementsByClassName("slider")[index].getElementsByClassName("mySlides");
  let prevBtn = document.getElementsByClassName("slider")[index].getElementsByClassName("prev")[0];
  let nextBtn = document.getElementsByClassName("slider")[index].getElementsByClassName("next")[0];

  if (n > slides.length) {
    slideIndex[index] = 1;
  }
  if (n < 1) {
    slideIndex[index] = slides.length;
  }

  // Hide all the slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show only the current slide
  slides[slideIndex[index]-1].style.display = "block";
}
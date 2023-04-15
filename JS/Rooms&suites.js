
let slideIndex = [1, 1, 1, 1];
// Call showSlides() after the page has loaded
window.addEventListener("load", function() {
  showSlides(slideIndex[0], 0);
  showSlides(slideIndex[1], 1);
  showSlides(slideIndex[2], 2);
  showSlides(slideIndex[3], 3);
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
















// function showSlides(n, container) {
//   let i;
//   let slides = container.getElementsByClassName("mySlides");
  
//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
  
//   // Hide all the slides
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
  
//   // Show only the first slide
//   slides[slideIndex-1].style.display = "block";
// }

// let slideIndex1 = 1;
// let slideIndex2 = 1;

// // Call showSlides() after the page has loaded
// window.addEventListener("load", function() {
//   showSlides(slideIndex1, document.getElementById("slider1"));
//   showSlides(slideIndex2, document.getElementById("slider2"));
// });

// // Next/previous controls for slider1
// function plusSlides1(n) {
//   showSlides(slideIndex1 += n, document.getElementById("slider1"));
// }

// // Next/previous controls for slider2
// function plusSlides2(n) {
//   showSlides(slideIndex2 += n, document.getElementById("slider2"));
// }

// // Thumbnail image controls for slider1
// function currentSlide1(n) {
//   showSlides(slideIndex1 = n, document.getElementById("slider1"));
// }

// // Thumbnail image controls for slider2
// function currentSlide2(n) {
//   showSlides(slideIndex2 = n, document.getElementById("slider2"));
// }

















// code for slider-1
// let slideIndex = 1;

// // Call showSlides() after the page has loaded
// window.addEventListener("load", function() {
//   showSlides(slideIndex);
// });

// // Next/previous controls
// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
  
//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
  
//   // Hide all the slides
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
  
//   // Show only the first slide
//   slides[slideIndex-1].style.display = "block";
// }


































// let slideIndex1 = 1;
// showSlides1(slideIndex1);

// // Next/previous controls
// function plusSlides1(m) {
//   showSlides1(slideIndex1 += m);
// }

// // Thumbnail image controls
// function currentSlide1(m) {
//   showSlides1(slideIndex1 = m);
// }

// function showSlides1(m) {
//   let j;
//   let slides1 = document.getElementsByClassName("mySlides1 ");
  
//   if (m > slides1.length) {slideIndex1 = 1}
//   if (m < 1) {slideIndex1 = slides1.length}
//   for (j = 0; j < slides1.length; j++) {
//     slides1[j].style.display = "none";
//   }
  
//   slides1[slideIndex1-1].style.display = "block";

// }
var previous = document.querySelector(".prev");
var next = document.querySelector(".next");
var preview = document.querySelectorAll(".preview-image");
var slides = document.getElementsByClassName("slide");
var current = 0;

//var previewNumber = this.getAttribute("data-number");
var previewNumber = document.querySelectorAll('[data-number]')
console.log(previewNumber)
// Code that moves to the next slide
next.addEventListener("click", function () {
  slides[current].classList.remove("active");
  current ++;
  if (current === slides.length)
    current = 0;
  slides[current].classList.add("active");
});

// Code that moves to the previous slide
previous.addEventListener("click", function () {
  slides[current].classList.remove("active");
  current --;
  if (current < 0)
    current = (slides.length - 1);
  slides[current].classList.add("active");
});

for(let i = 0; i < preview.length; i++) {
  preview[i].addEventListener("click", function (preview) {

    
    preview = preview.target;
        var previewNumber = preview.getAttribute("data-number");
         slides[current].classList.remove("active");
        current = previewNumber;
        slides[current].classList.add("active");
    
  });
}


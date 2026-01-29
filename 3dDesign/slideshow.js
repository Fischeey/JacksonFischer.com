let slideIndex = [1,1,1,1,1,1,1,1];
let slideId = ["mySlidesSpaceship", "mySlidesGirl", "mySlidesCar","mySlidesHouse", "mySlidesGeoNodes","mySlidesBuilding", "mySlidesRock","mySlidesWeapons"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);
showSlides(1, 3);
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
function currentSlide(n, no) {
    slideIndex[no] = n
  showSlides(n,no);
}
function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

// window.addEventListener('load', function() {
//   currentSlide(1)
// });
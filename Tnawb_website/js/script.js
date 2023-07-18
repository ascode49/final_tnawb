const scroll = document.querySelector("#scroll");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    scroll.style.display = "block";
  } else {
    scroll.style.display = "none";
  }
}
scroll.addEventListener('click', function(){
    document.documentElement.scrollTop = 0;
})
window.onload = function() {
  var menuButton = document.getElementById("open-menu");
  menuButton.click();
};
const link100 = document.querySelector("#links");
const cen70 = document.querySelector("#center");
link100.addEventListener("mouseover" , function () {
  cen70.style.background = "url(/pictures/link.png)";
  cen70.style.backgroundSize = "100% 100%";
})
link100.addEventListener("mouseleave" , function () {
  cen70.style.background = "none";
  cen70.style.backgroundSize = "100% 100%";
  cen70.style.backgroundColor = "#DDE6ED";
})
const grant = document.querySelector("#grants");
grant.addEventListener("mouseover" , function () {
  cen70.style.background = "url(/pictures/pexels-pixabay-36785.png)";
  cen70.style.backgroundSize = "100% 100%";
})
grant.addEventListener("mouseleave" , function () {
  cen70.style.background = "none";
  cen70.style.backgroundSize = "100% 100%";
  cen70.style.backgroundColor = "#DDE6ED";
})
const register = document.querySelector("#reg");
register.addEventListener("mouseover" , function () {
  cen70.style.background = "url(/pictures/registration-abstract-concept-vector-illustration-600w-1856790145.webp)";
  cen70.style.backgroundSize = "100% 100%";
})
register.addEventListener("mouseleave" , function () {
  cen70.style.background = "none";
  cen70.style.backgroundSize = "100% 100%";
  cen70.style.backgroundColor = "#DDE6ED";
})  
const ed  = document.querySelector("#ed");
ed.addEventListener("mouseover" , function () {
  cen70.style.background = "url(/pictures/education.png)";
  cen70.style.backgroundSize = "100% 100%";
})
ed.addEventListener("mouseleave" , function () {
  cen70.style.background = "none";
  cen70.style.backgroundSize = "100% 100%";
  cen70.style.backgroundColor = "#DDE6ED";
})  
const court  = document.querySelector("#court");
court.addEventListener("mouseover" , function () {
  cen70.style.background = "url(/pictures/court.png)";
  cen70.style.backgroundSize = "100% 100%";
})
court.addEventListener("mouseleave" , function () {
  cen70.style.background = "none";
  cen70.style.backgroundSize = "100% 100%";
  cen70.style.backgroundColor = "#DDE6ED";
})  
const animal  = document.querySelector("#animal_care");
animal.addEventListener("mouseover" , function () {
  cen70.style.background = "url(/pictures/animal.png)";
  cen70.style.backgroundSize = "100% 100%";
})
animal.addEventListener("mouseleave" , function () {
  cen70.style.background = "none";
  cen70.style.backgroundSize = "100% 100%";
  cen70.style.backgroundColor = "#DDE6ED";
})
const spca  = document.querySelector("#spca");
spca.addEventListener("mouseover" , function () {
  cen70.style.background = "url(/pictures/society.png)";
  cen70.style.backgroundSize = "100% 100%";
})
spca.addEventListener("mouseleave" , function () {
  cen70.style.background = "none";
  cen70.style.backgroundSize = "100% 100%";
  cen70.style.backgroundColor = "#DDE6ED";
})
const rec  = document.querySelector("#rec");
rec.addEventListener("mouseover" , function () {
  cen70.style.background = "url(/pictures/recognition.png)";
  cen70.style.backgroundSize = "100% 100%";
})
rec.addEventListener("mouseleave" , function () {
  cen70.style.background = "none";
  cen70.style.backgroundSize = "100% 100%";
  cen70.style.backgroundColor = "#DDE6ED";
})
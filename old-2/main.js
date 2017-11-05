var navbar = document.getElementById("responsive-navbar");
var navClick = document.getElementById("nav-click");
var slideShowTitle = document.getElementById("slideshow-title");
var slideShowTitleResponsive = document.getElementById("slideshow-responsive-title");
var slideshowPicResponsive = document.getElementById("slideshow-pic-responsive");
var slideShowLink = document.getElementById("slideshow-link");
var slideShowPic = document.getElementById("slideshow-pic");
var leftArrow = document.getElementById("left");
var rightArrow = document.getElementById("right");
var currentDisplay = document.getElementById("num");
var current = 0;
var slideshowItems = [
    {"pic": "apps/fruitsandvegetables.png", "title": "FRUITS AND VEGETABLES", "link": "https://colorlessenergy.github.io/fruitsandvegetables/"},
    {"pic": "apps/pacman-game.png", "title": "PACMAN", "link": "https://colorlessenergy.github.io/pacman/"},
    {"pic": "apps/devbanana.png", "title": "Devbanana - freelance", "link": "https://colorlessenergy.github.io/spelling-with-chemistry/"}
    ];

function slideShow () {
    if (current === 3) {
        current = 0
    }
    if (current === -1) {
        current = 2
    }
    slideShowTitle.innerHTML = slideshowItems[current].title;
    slideShowLink.href = slideshowItems[current].link;
    slideShowPic.src = slideshowItems[current].pic;
    slideShowTitleResponsive.innerHTML = slideshowItems[current].title;
    slideshowPicResponsive.src = slideshowItems[current].pic;
    currentDisplay.innerHTML = current+1;
}

navClick.addEventListener("click", function () {
    navbar.classList.toggle("show");
});

leftArrow.addEventListener("click", function () {
  current--;
  slideShow();
});

rightArrow.addEventListener("click", function () {
  current++;
  slideShow();
});

setInterval(function () {
  current++;
  slideShow();
}, 4500)

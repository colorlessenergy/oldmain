var loadWork = document.getElementsByClassName("load");
var displayWork = document.getElementById("work");
var show = document.getElementById("show");
var titleLink = document.getElementsByClassName("link");
var titleWork = document.getElementsByClassName("title-work");
var logo = document.getElementsByClassName("logo");

// responsive
var responsiveSlide = document.getElementById("res-range")
var resLogo = document.getElementsByClassName("res-logo");
var resTitleWork = document.getElementsByClassName("res-title-work");
var resTitleLink = document.getElementsByClassName("res-link");

var projName = ["Pacman", "Giant", "Zed", "Water", "Fruits and Vegetables", "dev banana"];

for (var i = 0; i < loadWork.length; i++) {
  loadWork[i].addEventListener("click", function () {
    displayWork.classList.toggle("toggleNav");
  });
}

document.getElementById("slider").defaultValue = 0;

document.getElementById("slider").oninput = function() {
  for (var i = 0; i < logo.length; i++) {
    if (logo[i].style.display = "flex") {
      logo[i].style.display = "none";
    }
    if (titleWork[i].style.display = "block") {
      titleWork[i].style.display = "none";
    }
    if (titleLink[i].style.display = "inline") {
      titleLink[i].style.display = "none";
    }
  }
    myFunction();
};


function myFunction() {
   var val = document.getElementById("slider").value;
   show.innerHTML = projName[val];
   console.log(titleLink[val]);

   logo[val].style.display = "flex";
   titleWork[val].style.display = "block";
   titleLink[val].style.display = "inline";
}

responsiveSlide.defaultValue = 0;

responsiveSlide.oninput = function () {
  for (var i = 0; i < logo.length; i++) {
    if (resLogo[i].style.display = "flex") {
      resLogo[i].style.display = "none";
    }
    if (resTitleWork[i].style.display = "block") {
      resTitleWork[i].style.display = "none";
    }
    if (resTitleLink[i].style.display = "inline") {
      resTitleLink[i].style.display = "none";
    }
  }
  resFunction();
}

function resFunction() {
   var val = responsiveSlide.value;
   document.getElementById("res-show").innerHTML = projName[val];

   resLogo[val].style.display = "flex";
   resTitleWork[val].style.display = "block";
   resTitleLink[val].style.display = "inline";
}

var containerMenu = document.querySelector(".container-menu");
var menuShow = document.querySelector(".menu-show");
var down = document.querySelector(".scroll");
var gallery = document.querySelector(".gallery");
var once = false;
var galleryPic = gallery.querySelectorAll(".gallery-wrapper a div");



if (gallery) {

  down.addEventListener("click", function () {
    let scrollValue = 0;
    let scroll = window.setInterval(function () {
      let prevValue = window.scrollY;
      if (window.scrollY < gallery.offsetTop - 100) {
        window.scrollBy(0, scrollValue);
    } else if (window.scrollY > gallery.offsetTop - 100) {
      scrollValue = 0;
      window.clearInterval(scroll);
    }
    scrollValue++;
    }, 10)
  });

  var scrollToShowPic = window.setInterval(function () {
    console.log("im running " + window.scrollY)
    if (window.scrollY > 351 && !once) {
      console.log("called", window.scrollY);
      galleryPic.forEach(function (current) {
        current.classList.toggle("showPic");
      });
      once = true;
      window.clearInterval(scrollToShowPic);
    }
  }, 10);
}

if (containerMenu) {
  containerMenu.addEventListener("click", function(e) {
    e.currentTarget.classList.toggle("change");
    menuShow.classList.toggle("toggle-nav");
  });
}

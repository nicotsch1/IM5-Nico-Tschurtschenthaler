// Navigation
document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");
 
    burgerMenu.addEventListener("click", function () {
       navLinks.style.display =
          navLinks.style.display === "flex" || navLinks.style.display === ""
             ? "none"
             : "flex";
    });
 });



// Go to top
window.addEventListener("scroll", function () {
    const footer = document.querySelector(".footer");
    const goToTopBtn = document.getElementById("goToTopBtn");
    const footerPosition = footer.getBoundingClientRect().top;
  
    if (footerPosition < window.innerHeight) {
      goToTopBtn.style.bottom = `${window.innerHeight - footerPosition + 20}px`;
    } else {
      goToTopBtn.style.bottom = "20px";
    }
  });
  
  function goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  

 //Slider
 var tiles = document.querySelectorAll('.tile');
 var currentIndex = 0;
 var totalTiles = tiles.length;
 
 function showTile(index) {
     tiles.forEach(function(tile) {
         tile.classList.remove('active');
     });
     tiles[index].classList.add('active');
 }
 
 function moveToNext() {
     currentIndex = (currentIndex + 1) % totalTiles;
     showTile(currentIndex);
 }
 
 function moveToPrevious() {
     currentIndex = (currentIndex - 1 + totalTiles) % totalTiles;
     showTile(currentIndex);
 }


 
//Landingpage

var Lslide      = document.querySelectorAll('.Lslide'),
    Rslide      = document.querySelectorAll('.Rslide'),
    control     = document.querySelectorAll('.oncontrol'),
    slideHeight = document.querySelector('.wrapper').clientHeight,
    color = ['#fdc97c', '#e5d3d0', '#71b3d6'],
    index = 0;


function init() {
    slideHeight = document.querySelector('.wrapper').clientHeight;
    for (i = 0; i < Lslide.length; i++) {
        Lslide[i].style.backgroundColor = color[i];
        Lslide[i].style.top = -slideHeight * i + "px";
        Rslide[i].style.top = slideHeight * i + "px";
    }  
}
init()
window.addEventListener('resize', function(){
    init()
});

function moveToTop() {

    index++;
    for (el = 0; el < Lslide.length; el++) {
        Lslide[el].style.top = parseInt(Lslide[el].style.top) + slideHeight + "px";
        Rslide[el].style.top = parseInt(Rslide[el].style.top) - slideHeight + "px";
    }

    if (index > Lslide.length-1) {
        index = 0;
        for (el = 0; el < Lslide.length; el++) {
            Lslide[el].style.top = -slideHeight * el + "px";
            Rslide[el].style.top = slideHeight * el + "px";
        }
    }
}

function moveToBottom() {
    index--;
    for (el = 0; el < Lslide.length; el++) {
        Lslide[el].style.top = parseInt(Lslide[el].style.top) - slideHeight + "px";
        Rslide[el].style.top = parseInt(Rslide[el].style.top) + slideHeight + "px";
        
    }
    if (index < 0) {
        index = Rslide.length-1;
        for (el = 0; el < Lslide.length; el++) {
            Lslide[el].style.top = parseInt(Lslide[el].style.top) + slideHeight * Lslide.length + "px";
            Rslide[el].style.top = parseInt(Rslide[el].style.top) - slideHeight * Rslide.length + "px";
        }
    }
}

function transition() {
    for (t = 0; t < Lslide.length; t++) {
        Lslide[t].style.transition = "all 0.8s";
        Rslide[t].style.transition = "all 0.8s";
    }
}
  

for (t = 0; t < control.length; t++) {
    control[t].addEventListener("click", function() {

        if (this.classList.contains('control-top')) {
            moveToTop()
        } 
        if (this.classList.contains('control-bottom')) {
            moveToBottom()
        }

        transition()
   
    });
}

var wheeling;
function mousemouve(e) {

    clearTimeout(wheeling);
    e.preventDefault();
    var e = window.event || e; 
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    
    wheeling = setTimeout(function() {
        wheeling = undefined;
        if (delta === 1) {
            moveToTop()
        }
        if (delta === -1) {
            moveToBottom()
        }
    }, 100);

    transition()
}

document.addEventListener("mousewheel", mousemouve);
document.addEventListener("DOMMouseScroll", mousemouve);



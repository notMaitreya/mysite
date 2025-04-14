var imgs = document.querySelectorAll('#slider .card');
var dots = document.querySelectorAll('.dot');
var currentImg = 0; // index of the first image 
const interval = 3000;
var timer = setInterval(changeSlide, interval);

function changeSlide(n) { //function that controls the slider
    for (var i = 0; i < imgs.length; i++) { // reset
      imgs[i].style.opacity = 0;
      dots[i].className = dots[i].className.replace(' active', '');
    }
    
    if (n != undefined) {
        currentImg = n;
    } else {
        currentImg = (currentImg + 1) % imgs.length; // update the index number
    }

    imgs[currentImg].style.opacity = 1;
    dots[currentImg].className += ' active';

if (n != undefined) {
    clearInterval(timer);
    timer = setInterval(changeSlide, interval);
    currentImg = n;
}

}

changeSlide(currentImg);

var activeElement = 0;
var chairImages = ['./images/black_chair.png', './images/orange_chair.png'];
var chairImageHtml = document.querySelector('.chair');

var arrowLeft = document.querySelector('.arrow.left');
var arrowRight = document.querySelector('.arrow.right');

function changeElement() {
    activeElement++;
    if (activeElement == chairImages.length) {
        activeElement = 0;
    }
    chairImageHtml.src = chairImages[activeElement];

}



arrowLeft.addEventListener('click', changeElement);
arrowRight.addEventListener('click', changeElement);
var prevBtn = document.querySelector(".prev");
var nextBtn = document.querySelector(".next");
var carouselInner = document.querySelector(".carousel-inner");
// var items = document.querySelectorAll(".item");
var carouselItems = carouselInner.children;
var widthItem = carouselInner.clientWidth;

var widthScreen = carouselInner.clientWidth * carouselItems.length;
carouselInner.style.width = `${widthScreen}px`;
// console.log(widthScreen);
// console.log(widthItem);
var position = 0;
var carouselDot = document.querySelector(".carousel-dot");

for (var i = 0; i < carouselItems.length; i++) {
    carouselDot.innerHTML += '<div class="dot"></div>';
}

var arr = carouselDot.children;
var carouselDots = Array.from(arr);
console.log(arr);
var pos = 0;
var dotChange = carouselDots[0];
dotChange.style.background = "orangered";
carouselDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        dotChange.style.background = "transparent";
        position = widthItem * -1 * index;
        carouselInner.style.translate = `${position}px`;
        dot.style.background = "orangered";
        dotChange = dot;
    });
});

nextBtn.addEventListener("click", function () {
    dotChange.style.background = "transparent";
    if (Math.abs(position) < widthScreen - widthItem) {
        var i = Math.abs(position / widthItem);
        carouselDots[i + 1].style.background = "orangered";
        dotChange = carouselDots[i + 1];
        position -= widthItem;
        carouselInner.style.translate = `${position}px`;
    } else {
        position = 0;
        carouselDots[0].style.background = "orangered";
        dotChange = carouselDots[0];
        carouselInner.style.translate = `${position}px`;
    }
});

var prevPos = widthScreen * -1 + widthItem;

prevBtn.addEventListener("click", function () {
    dotChange.style.background = "transparent";
    if (position < 0) {
        var i = Math.abs(position / widthItem);
        carouselDots[i - 1].style.background = "orangered";
        dotChange = carouselDots[i - 1];
        position += widthItem;
        carouselInner.style.translate = `${position}px`;
    } else {
        position = prevPos;
        carouselDots[carouselDots.length - 1].style.background = "orangered";
        dotChange = carouselDots[carouselDots.length - 1];
        carouselInner.style.translate = `${position}px`;
    }
});

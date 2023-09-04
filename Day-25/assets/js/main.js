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
var dotChange = carouselDots[0];
dotChange.style.background = "orangered";
carouselDots.forEach(function (dot, index) {
    dot.addEventListener("click", function () {
        dotChange.style.background = "#fff";
        position = widthItem * -1 * index;
        carouselInner.style.translate = `${position}px`;
        dot.style.background = "orangered";
        dotChange = dot;
    });
});

var nextSlide = function () {
    dotChange.style.background = "#fff";
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
};

nextBtn.addEventListener("click", nextSlide);
var prevPos = widthScreen * -1 + widthItem;
var prevSlide = function () {
    dotChange.style.background = "#fff";
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
};

prevBtn.addEventListener("click", prevSlide);

var carouselItemsArr = Array.from(carouselItems);
console.log(carouselItemsArr);

var image = document.querySelector(".item");
var isDown = false;
var initialPos;
carouselInner.addEventListener("mousedown", function (e) {
    e.preventDefault();
    carouselInner.style.cursor = "move";
    isDown = true;
    initialPos = e.clientX;
});

document.addEventListener("mousemove", function (e) {
    if (isDown) {
        e.preventDefault();
        var clientX = e.clientX - initialPos;
        var current = Math.abs(position / widthItem);
        carouselInner.style.translate = `${-(current * widthItem - clientX)}px`;
        console.log(clientX);
        var rate = clientX / widthItem;
        console.log(rate);
        if (rate <= -0.1) {
            isDown = false;
            nextSlide();
        }
        console.log(position);
        if (rate >= 0.1) {
            isDown = false;
            prevSlide();
        }
    }
});

document.addEventListener("mouseup", function (e) {
    isDown = false;
    carouselInner.style.cursor = "default";
    let clientX = e.clientX - initialPos;
    var current = Math.abs(position / widthItem);
    if (clientX / widthItem > -0.1 || clientX / widthItem < 0.1) {
        carouselInner.style.translate = `-${current * widthItem}px`;
    }
});

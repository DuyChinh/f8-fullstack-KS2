const img = document.querySelector("img");
const zoomImg = document.querySelector(".zoom-img");
const zoomArea = document.querySelector(".zoom-area");

var x = zoomImg.offsetWidth / zoomArea.offsetWidth;
var y = zoomImg.offsetHeight / zoomArea.offsetHeight;
zoomImg.style.backgroundImage = "url('" + img.src + "')";
zoomImg.style.backgroundSize = img.width * x + "px " + img.height * y + "px";

const handleMove = (e) => {
    const posCursor = handleCursor(e);
    /*find pos of zoomArea */
    areaX = posCursor.x - (zoomArea.offsetWidth / 2);
    areaY = posCursor.y - (zoomArea.offsetWidth / 2);
    /*Condition for zoomArea */
    if(areaX < 0) {
        areaX = 0;
    }
    if(areaY < 0) {
        areaY = 0;
    } 
    if(areaX > img.width - zoomArea.offsetWidth) {
        areaX = img.width - zoomArea.offsetWidth;
    }
    if (areaY > img.height - zoomArea.offsetHeight) {
      areaY = img.height - zoomArea.offsetHeight;
    }
    /*change pos of zoomArea */
    zoomArea.style.left = areaX + "px";
    zoomArea.style.top = areaY + "px";
    zoomImg.style.backgroundPosition = "-" + areaX * x + "px -" + areaY * y + "px";
}

img.addEventListener("mousemove", handleMove);
zoomArea.addEventListener("mousemove", handleMove);


const handleCursor = (e) => {
    var imgPos = img.getBoundingClientRect();
    var cursorX = e.clientX - imgPos.x ;
    var cursorY = e.clientY - imgPos.y ;
    return {x: cursorX, y: cursorY};
}

/*Select Image */
const imgInput = document.querySelector("#imageInput");

const loadImage = (file) => {
     return new Promise((resolve) => {
      
       const reader = new FileReader();
       reader.addEventListener("load", (e) => {
         resolve(e.target.result);
       });
       reader.readAsDataURL(file);
     });
}

imgInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    loadImage(file).then((imageData) => {
      img.src = imageData;
      zoomImg.style.backgroundImage = "url('" + img.src + "')";
    });
    
});



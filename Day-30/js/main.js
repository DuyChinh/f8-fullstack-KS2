// var textarea = document.querySelector("#text-area");
var btnStrong = document.querySelector(".btn-strong");
var btnItalic = document.querySelector(".btn-italic");
var btnUnderline = document.querySelector(".btn-underline");
var btnColor = document.querySelector(".btn-color");
var content = document.querySelector("#content");
var downloadFile = document.querySelector(".download-file");
var typeOfFile = document.querySelector(".type-file");

btnStrong.addEventListener("click", function() {
    document.execCommand("bold");
});

btnItalic.addEventListener("click", function() {
    document.execCommand("italic");
});

btnUnderline.addEventListener("click", function() {
    document.execCommand("underline");
});

btnColor.addEventListener("change", function() {
    document.execCommand("foreColor", false, btnColor.value);
})

downloadFile.addEventListener("click", function(e) {
    e.stopPropagation();
    typeOfFile.classList.add("show");
    
});

document.body.addEventListener("click", function() {
    typeOfFile.classList.remove("show");
});

var char = document.querySelector(".char span");
var word = document.querySelector(".word span");
var cntChar = 0, cntWord = 0;
content.addEventListener("input", function() {
    if(content.textContent == "") {
        cntChar = 0;
        cntWord = 0;
        char.innerText = cntChar;
        word.innerText = cntWord;
    } else {
        var cntChar = content.textContent.length;
        char.innerText = cntChar;
        var words = content.textContent.trim().split(/\s+/);
        console.log(words);
        word.innerText = words.length;
    }
});

/*Dowload File */
var btnTxt = document.querySelector(".btn-txt");
var btnPdf = document.querySelector(".btn-pdf");
var title = document.querySelector(".title");

btnTxt.addEventListener("click", function() {
    var a = document.createElement("a");
    var blob = new Blob([content.innerText]);
    var url = URL.createObjectURL(blob);
    a.href = url;
    a.download = `${title.value}`;
    a.click();
});

btnPdf.addEventListener("click", function() {
    html2pdf(content).save(title.value);
})

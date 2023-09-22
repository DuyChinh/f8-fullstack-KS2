window.addEventListener("load", function() {
    content.focus();
});

var btnColor = document.querySelector(".btn-color");
var content = document.querySelector("#content");
var downloadFile = document.querySelector(".download-file");
var typeOfFile = document.querySelector(".type-file");
var btnNew = document.querySelector(".btn-new");
var selectOption = document.querySelector("#fontName");
var fontSize= document.querySelector("#fontSize");
selectOption.addEventListener("change", function() {
    var selectFont = selectOption.value;
    document.execCommand(selectOption.id, false, selectFont);
})

fontSize.addEventListener("change", function() {
    var selectFont = fontSize.value;
    document.execCommand(fontSize.id, false, selectFont);
})


btnNew.addEventListener("click", function() {
    content.innerText = "";
    char.innerText = 0;
    word.innerText = 0;
})

var btnAction = document.querySelector(".btn-action");
var buttons = btnAction.querySelectorAll("button");


buttons.forEach(function(btn) {
    btn.addEventListener("click", function() {
        document.execCommand(btn.id);
        if(btn.classList.contains("active")) {
            btn.classList.remove("active");
        } else {
            btn.classList.add("active");
        }
    })
})

content.addEventListener("keydown", function(e) {
    if (e.key === "Tab") {
        e.preventDefault();
        document.execCommand("insertText", false, "\t");
    }
  });

btnColor.addEventListener("change", function() {
    document.execCommand("foreColor", false, btnColor.value);
})

downloadFile.addEventListener("click", function(e) {
    e.stopPropagation();
    if(typeOfFile.classList.contains("show")) {
        typeOfFile.classList.remove("show");
    } else {
        typeOfFile.classList.add("show");
    }
});

document.body.addEventListener("click", function() {
    typeOfFile.classList.remove("show");
});

var char = document.querySelector(".char span");
var word = document.querySelector(".word span");
var cntChar = 0, cntWord = 0;
content.addEventListener("input", function(e) {
    console.log(e);
    if(content.textContent == "") {
        cntChar = 0;
        cntWord = 0;
        char.innerText = cntChar;
        word.innerText = cntWord;
    } else {
        var cntChar = content.textContent.length;
        char.innerText = cntChar;
        var contentE = content.innerText.trim();
        var words = contentE.split(/\s+|\n/);
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

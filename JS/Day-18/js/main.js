let content = document.getElementById("content");

let contentArr = content.innerText.split(" ");
let contentIntialArr = content.innerText.split(" ");
let i = 0;
setInterval(function () {
    contentArr[i] = `<span>${contentArr[i]}</span>`;
    content.innerHTML = contentArr.join(" ");
    contentArr[i] = contentIntialArr[i];
    i++;
    if (i >= contentArr.length) {
        i = 0;
    }
}, 1000);

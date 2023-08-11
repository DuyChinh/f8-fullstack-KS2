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

// let doc = document.getElementById("js-doc");

// let i = 0;
// let docArr = doc.innerText.split(" ");
// let normalArr = doc.innerText.split(" ");
// setInterval(function () {
//     docArr[i] = "<span>" + docArr[i] + "</span>";
//     doc.innerHTML = docArr.join(" ");
//     docArr[i] = normalArr[i];
//     i++;
//     if (i >= docArr.length) {
//         i = 0;
//     }
// }, 500);

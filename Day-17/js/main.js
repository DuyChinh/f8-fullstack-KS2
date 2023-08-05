/*EXE1 */
var km = 121;
var fee = 0;
if (km > 0) {
    if (km <= 1) {
        fee += km * 15000;
    } else if (km <= 5) {
        fee += 15000 + (km - 1) * 13500;
    } else {
        fee += 15000 + 13500 * 4 + (km - 5) * 11000;
    }
    if (km > 120) {
        fee -= fee * 0.1;
    }
    console.log(`Taxi fee: ${fee}`);
} else {
    console.log("Please enter fee again!");
}

/*EXE2 */
var kWh = 111;
var fee = 0;
if (kWh > 0) {
    if (kWh < 51) {
        fee += (kWh - 0) * 1.678;
    } else if (kWh < 100) {
        fee += 50 * 1.678 + (kWh - 50) * 1.734;
    } else if (kWh < 200) {
        fee += 50 * 1.678 + 50 * 1.734 + (kWh - 100) * 2.014;
    } else if (kWh < 300) {
        fee += 50 * 1.678 + 50 * 1.734 + 100 * 2.014 + (kWh - 200) * 2.536;
    } else if (kWh < 400) {
        fee +=
            50 * 1.678 +
            50 * 1.734 +
            100 * 2.014 +
            100 * 2.536 +
            (kWh - 200) * 2.834;
    } else {
        fee +=
            50 * 1.678 +
            50 * 1.734 +
            100 * 2.014 +
            100 * 2.536 +
            100 * 2.834 +
            (kWh - 400) * 2.927;
    }
    console.log(`Electric fee: ${fee}`);
}

/*EXE3 */
var n = 10;
var total = 0;
for (var i = 1; i <= n; i++) {
    total += i * (i + 1);
}

console.log(`S = ${total}`);
/*EXE4 */
var n = 31;
function checkPrime(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (var i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
if (checkPrime(n)) {
    console.log(`${n} is prime number`);
} else {
    console.log(`${n} isn't prime number`);
}
/*EXE5 */
var n = 5;
var cnt = 1;
var triangle = "";

for (var i = 0; i < n; i++) {
    for (var j = 0; j <= i; j++) {
        triangle += `${cnt} `;
        cnt++;
    }
    triangle += "\n";
}
console.log(`Triangle:\n${triangle}`);
/*EXE6 */

const chessTable = document.getElementById("chessTable");
var color;
for (let i = 0; i < 64; i++) {
    if (parseInt(i / 8 + i) % 2 === 0) {
        color = "orangered";
    } else {
        color = "#333";
    }
    chessTable.appendChild(
        document.createElement("div")
    ).style.backgroundColor = color;
}

/*EXE7 */
document.write("<div class='multiTable'>");
for (var i = 1; i <= 10; i++) {
    document.write("<div class='multiTable__item'>");
    document.write(`<h3 class='multiTable__title' >${i}</h3>`);
    for (var j = 1; j <= 10; j++) {
        document.write(`${i} x ${j} = ${i * j}<br>`);
    }
    document.write("</div>");
}

document.write("</div>");
/*EXE 8 */

function getTotal(n) {
    if (n === 0) {
        return 0;
    } else {
        return 1 / n + getTotal(n - 1);
    }
}

console.log(`Sum = ${getTotal(5)}`);

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

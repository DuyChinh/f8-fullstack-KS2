/*EXE1 */
var a = 2003;
var b = 21;

a -= b;
b += a;
a = b - a;

console.log(`EXE1: `);
console.log(`${a}  ${b}`);

/*EXE2 */
var sum = 10 + 20 + 5 ** 10 / 2;
console.log(`EXE2: `);
console.log(sum);

/*EXE3 */

var a = 4,
    b = 10,
    c = 5;
var max = a;
if (b > max) {
    max = b;
}
if (c > max) {
    max = c;
}
console.log(`EXE3: `);
console.log(max);

/*EXE4 */
var a = 2;
var b = 5;
console.log(`EXE4: `);
if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
    console.log("Cùng dấu");
} else {
    console.log("Trái dấu");
}

/*EXE5 */
var a = 5,
    b = 10,
    c = 2;

if (a > b) {
    var temp = 0;
    temp = a;
    a = b;
    b = temp;
}
if (a > c) {
    var temp = 0;
    temp = a;
    a = c;
    c = temp;
}

if (b > c) {
    var temp = 0;
    temp = b;
    b = c;
    c = temp;
}
console.log(`EXE5: `);
console.log(`${a} ${b} ${c}`);

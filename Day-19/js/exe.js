/*EXE1 */
let arr = [10, 5, 6, 2, -1, 7, 18, 15];
let posMin = 0,
    posMax = 0;
let min = arr[0],
    max = arr[0];
for (let i in arr) {
    if (i == 0) {
        continue;
    }
    if (arr[i] < min) {
        min = arr[i];
        posMin = i;
    }
    if (arr[i] > max) {
        max = arr[i];
        posMax = i;
    }
}

console.log(`Largest Number: ${max}, pos = ${posMax}`);
console.log(`Smallest Number: ${min}, pos = ${posMin}`);
console.log(`<------End Exe1------>`);
/*EXE 2 */
var checkPrime = function (x) {
    if (x < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i == 0) {
            return false;
        }
    }
    return true;
};

let arr2 = [3, 9, 11, 14, 312, 21, 13];
let sum = 0;
for (let index in arr2) {
    if (checkPrime(arr2[index])) {
        sum += arr2[index];
    }
}
if (sum == 0) {
    console.log("Không có số nguyên tố");
} else {
    console.log(`Sum of prime numbers is: ${sum}`);
}
console.log(`<------End Exe2------>`);
/*EXE 3 */
let arr3 = [2, 7, 3, 2, 4, 3, 5, 6, 2, 4];
let set = new Set();
for (let index in arr3) {
    set.add(arr3[index]);
}

let result = "";
for (let element of set) {
    result += `${element} `;
}
console.log(`Array: ${result}`);
console.log(`<------End Exe3------>`);
/*EXE 4 */
var numbers = [5, 1, 9, 8, 10];
var element = 4;
numbers[numbers.length] = element;
numbers.sort(function (a, b) {
    return a - b;
});
let pos = 0;
for (let i in numbers) {
    if (element > numbers[i]) {
        pos = +i + 1;
    } else {
        break;
    }
}
console.log(numbers);

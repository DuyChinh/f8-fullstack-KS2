/*EXE1 */
var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];
var result = arrA.reduce(function (intersect, element) {
    if (arrB.includes(element)) {
        intersect.push(element);
    }
    return intersect;
}, []);
console.log(`intersect 2 array: `, result);
console.log(`------End EXE1------`);

/*EXE2 */
var arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];

var flatArray = function (arr) {
    var array = [];
    arr.forEach(function (element) {
        Array.isArray(element)
            ? (array = array.concat(flatArray(element)))
            : array.push(element);
    });
    return array;
};

console.log(flatArray(arr));
console.log(`------End EXE2------`);

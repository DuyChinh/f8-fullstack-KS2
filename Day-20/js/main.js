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
// EXE3
var arr = [
    ["a", 1, true],
    ["b", 2, false],
];

if (Array.isArray(arr)) {
    if (arr.length === 0) {
        console.log("empty Array!");
    } else {
        var newArr = function flattenArr(arr) {
            return arr.reduce((prev, current) => {
                return prev.concat(
                    Array.isArray(current) ? flattenArr(current) : current
                );
            }, []);
        };
    }
} else {
    console.log("please enter again!");
}

var arrFlat = newArr(arr);
// console.log(arrFlat);

var result = [[], [], [], [], [], [], []];

for (index in arrFlat) {
    if (typeof arrFlat[index] === "string") {
        result[0].push(arrFlat[index]);
    } else if (typeof arrFlat[index] === "number") {
        result[1].push(arrFlat[index]);
    } else if (typeof arrFlat[index] === "boolean") {
        result[2].push(arrFlat[index]);
    } else if (Array.isArray(arrFlat[index])) {
        result[3].push(arrFlat[index]);
    } else if (arrFlat[index] === null && arrFlat[index] === undefined) {
        result[4].push(arrFlat[index]);
    } else if (typeof arrFlat[index] === "function") {
        result[5].push(arrFlat[index]);
    } else {
        result[6].push(arrFlat[index]);
    }
}
console.log(result);
// EXE 4
var arr = [
    {
        src: "https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        title: "Tiêu đề bài viết 1",
        content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi saepe ea dolore officiis cum commodi libero nobis? Aliquid totam maxime reprehenderit nulla quas adipisci sit facere nisi  libero rem necessitatibus magnam nostrum aspernatur, mollitia alias! Error facere nemo optio.",
    },

    {
        src: "https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        title: "Tiêu đề bài viết 2",
        content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi saepe ea dolore officiis cum commodi libero nobis? Aliquid totam maxime reprehenderit nulla quas adipisci sit facere nisi  libero rem necessitatibus magnam nostrum aspernatur, mollitia alias! Error facere nemo optio.",
    },
    {
        src: "https://images.unsplash.com/photo-1682685797406-97f364419b4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60",
        title: "Tiêu đề bài viết 3",
        content:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo excepturi saepe ea dolore officiis cum commodi libero nobis? Aliquid totam maxime reprehenderit nulla quas adipisci sit facere nisi  libero rem necessitatibus magnam nostrum aspernatur, mollitia alias! Error facere nemo optio.",
    },
];

var listItem = document.querySelector(".list-item");

for (var i in arr) {
    if (i % 2 != 0) {
        var html = `
        <div class="item">
            <div class="image">
                <img src="${arr[i].src}" alt="">
            </div>
            <div class="info">
                <p class="title">${arr[i].title}</p>
                <p class="desc">${arr[i].content}</p>
            </div>
        </div>
    `;
    } else {
        var html = `
        <div class="item">
            <div class="info">
                <p class="title">${arr[i].title}</p>
                <p class="desc">${arr[i].content}</p>
            </div>
            <div class="image">
                <img src="${arr[i].src}" alt="">
            </div>
        </div>
    `;
    }
    listItem.innerHTML += html;
}

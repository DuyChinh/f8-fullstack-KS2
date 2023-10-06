// var syllabus = document.querySelector(".syllabus");
// var syllabusItems = document.querySelectorAll(".syllabus-item");
// var syllabusModules = document.querySelectorAll(".syllabus-module");
// console.log(syllabusModules);
// var exe = 0, module = 0;
// // syllabusItems.forEach(function(syllabusItem) {
// //     var spanEL = document.createElement("span");
// //     spanEL.innerText += `Bài ${++exe}: `;
// //     syllabusItem.prepend(spanEL);
// // });

// var actionDrag = function(e) {
//     var client = e.targer.getBoundingClientRect();
//     var offset = {
//         x: e.pageX - client.left,
//         y: e.pageY - client.top,
//     }
//     return offset;
// }

// var conditionDraf = function(e) {
//     var client = e.getBoundingClientRect();
//     return (client.bottom - client.top) / 2;
// }

// var render = function(syllabus) {
//     var arr = Array.from(syllabus.children);
//     arr.forEach(function(item) {
//         item.draggle = "true";
//         var title = "Bài: ";
//         if(item.classList.contains("syllabus-module")) {
//             title = "Module: ";
//             module++;
//         } else {
//             exe++;
//         }
//         if (!item.children.length) {
//             item.innerHTML = `${title} ${
//               title === "Module " ? module : exe
//             }: <span>${item.innerText}</span>`;
//           } else {
//             item.innerHTML = `${title} ${
//               title === "Module " ? module : exe
//             }: <span>${item.children[0].innerText}</span>`;
//         }
//     })
// }

// function sortable(rootElement, renderView) {
//     var dragElement;

//     render(rootElement);
//     function handleDrag(e) {
//       e.preventDefault();
//       e.dataTransfer.dropEffect = "move";

//       var element = e.target;
   
//       if (
//         element &&
//         element !== dragElement &&
//         element.nodeName === "DIV"
//       ) {
       
//         var offset = actionDrag(e);
//         var conditionDraf= conditionDraf(e.target);
  
//         if (offset.y > conditionDraf) {
//           if (targetElement.nextSibling.parentElement === rootElement) {
//             // console.log(dragElement, targetElement.nextSibling);
//             rootElement.insertBefore(dragElement, element.nextSibling);
//           }
//         } else {
//           if (targetElement.parentElement === rootElement) {
//             rootElement.insertBefore(dragElement, element);
//           }
//         }
    
//       }
//     }

//     function handleDragEnd(e) {
//       e.preventDefault();
  
//       dragElement.classList.remove("opacity");
//       rootElement.removeEventListener("dragover", handleDrag);
//       rootElement.removeEventListener("dragend", handleDragEnd);
  
//       renderView(dragElement);

//     rootElement.addEventListener("dragstart", function (e) {
//       dragElement = e.target; 
//       console.log(dragElement);
  
//       //Set up Drag Start
//       e.dataTransfer.effectAllowed = "move";
//       e.dataTransfer.setData("Text", dragElement.textContent);
  
//       rootElement.addEventListener("dragover", handleDrag);
//       rootElement.addEventListener("dragend", handleDragEnd);
  
//       setTimeout(function () {
//         dragElement.classList.add("opacity");
//       }, 0);
//       var viewportHeight = window.innerHeight;
//     });
//   }
// }

// sortable(syllabus, function() {
//     exe = 0;
//     // module = 0;
//     render(syllabus);
//   });

var syllabus = document.querySelector(".syllabus");
var exe = 0;
var module = 0;
function render(list) {
  var childArr = Array.from(list.children);

  childArr.forEach(function (item) {
    item.draggable = "true";

    var title = "Bài ";

    if (item.classList.contains("syllabus-module")) {
      title = "Module ";
      module++;
    } else {
      exe++;
    }

    if (!item.children.length) {
      item.innerHTML = `${title} ${
        title === "Module " ? module : exe
      }: <span>${item.innerText}</span>`;
    } else {
      item.innerHTML = `${title} ${
        title === "Module " ? module : exe
      }: <span>${item.children[0].innerText}</span>`;
    }
  });
}


var getOffset = function(e) {
  var getRect = e.target.getBoundingClientRect();
  var offset = {
    x: e.pageX - getRect.left,
    y: e.pageY - getRect.top,
  };
  return offset;
};


var getHalfHeight = function(element) {
  var rect = element.getBoundingClientRect();
  return (rect.bottom - rect.top) / 2;
};

function sortable(rootElement, renderView) {
  var dragElement;
  render(rootElement);
  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
    var targetElement = e.target;
    if (
      targetElement &&
      targetElement !== dragElement &&
      targetElement.nodeName === "DIV"
    ) {
      // console.log(`offset.y: ${offset.y}, halfHeight: ${halfHeight}`);
      var offset = getOffset(e);
      var halfHeight = getHalfHeight(e.target);

      if (offset.y > halfHeight) {
        if (targetElement.nextSibling.parentElement === rootElement) {
          console.log(dragElement, targetElement.nextSibling);
          rootElement.insertBefore(dragElement, targetElement.nextSibling);
        }
      } else {
        if (targetElement.parentElement === rootElement) {
          rootElement.insertBefore(dragElement, targetElement);
        }
      }
    }
  }

  function handleDragEnd(e) {
    e.preventDefault();

    dragElement.classList.remove("opacity");
    rootElement.removeEventListener("dragover", handleDragOver);
    rootElement.removeEventListener("dragend", handleDragEnd);

    renderView(dragElement);
  }


  rootElement.addEventListener("dragstart", function (e) {
    dragElement = e.target; 
    console.log(dragElement);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("Text", dragElement.textContent);

    rootElement.addEventListener("dragover", handleDragOver);
    rootElement.addEventListener("dragend", handleDragEnd);
  });
}

sortable(syllabus, () => {
  exe = 0;
  module = 0;
  render(syllabus);
});
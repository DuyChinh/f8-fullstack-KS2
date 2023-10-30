import Navigo from "navigo";
const routerObject = new Navigo("/",{linksSelector: "a", hash: false});
const root = document.querySelector("#root");

const render = (root, html) => {
    root.innerHTML = html;
}

// const renderUI = (defaultLayout, component, params) => {
//     const html = defaultLayout.replace(/\{.*\}/g, component(params));
//     return html || component(params);
// }


const renderUI = (defaultLayout, component, params) => {
  const html = defaultLayout().replace(/\{.*\}/g, component(params));
  return html || component(params);
};

window.navigate = (path) => {
    routerObject.navigate(path);
}


export const router = (pathArr, defaultLayout) => {
  pathArr.forEach((pathItem) => {
    routerObject.on(pathItem.path, (item) =>
      render(root, renderUI(defaultLayout, pathItem.component, item))
    );
  });
//   routerInit.notFound(() => render(app, Error()));
  routerObject.resolve();
};

// export const router = (arr, defaultLayout) => {
//     arr.forEach((pathEL) => {
//         routerObject.on(pathEl.path, (el) => {
//             return (root, renderUI(defaultLayout, pathEL.component, el));
//         })
//     });
//     routerObject.resolve();
// }

// const router = (arr, layout) => {

// }
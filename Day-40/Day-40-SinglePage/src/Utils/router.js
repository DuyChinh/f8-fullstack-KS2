import Navigo from "navigo";
import { Error } from "../Error.js";
const routerObject = new Navigo("/",{linksSelector: "a", hash: false});
const root = document.querySelector("#root");

// const Error = () => {
//   document.body.innerHTML = `<h1>404</h1>`;
// }

const render = (html) => {
    root.innerHTML = html;
}

const show = (defaultLayout, component, el) => {
    const html = defaultLayout().replace(/\{.*\}/g, component(el));
    return html || component(params);
}
//Back to product
window.navigate = (path) => {
    routerObject.navigate(path);
}

export const router = (arr, layout) => {
  arr.forEach((pathEl) => {
    // console.log(pathEl, " ", pathEl.component);
    routerObject.on(pathEl.path, (el) => {
      console.log(el);
      return render(show(layout, pathEl.component, el));
    }
    );
  });
  routerObject.notFound(() => {
    document.body.style.background = "#fff";
    render(Error());
  })
  routerObject.resolve();
};

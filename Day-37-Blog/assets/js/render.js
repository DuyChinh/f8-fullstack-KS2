import  HttpClient  from "./clients.js";
const client = new HttpClient("https://api-auth-two.vercel.app");
let limit = 12;
let page = 1;
const root = document.querySelector("#root");
// console.log(root);

export function renderbtnLogout() {
    const divEL =  document.createElement("div");
    divEL.classList.add("register-block");
    const btnLogout = document.createElement("button");
    btnLogout.classList.add("btn");
    btnLogout.classList.add("btn-log-out");
    btnLogout.innerText = "Sign out";
    divEL.append(btnLogout);
    root.append(divEL);
}

export function renderLoginRegister() {
    var html = `
        <div class="container">
            <div class="form-action">
                <form action="" class="login-form form">
                    <label>Email</label>
                    <input type="email" class="form-control email" placeholder="Please enter the email">
                    <label>Password</label>
                    <input type="password" class="form-control password" placeholder="Please enter the password" />
                    <div class="btn-action">
                        <button class="btn btn-login">Log in</button>
                        <div class="btn btn-sign-up">Register</div>
                    </div>
                </form>
                <form action="" class="register-form form">
                    <label>Enter Your Name</label>
                    <input type="name" id="name" placeholder="Please enter the name">
                    <label>Enter Your email</label>
                    <input type="email" id="email" placeholder="Please enter the email">
                    <label>Enter Your password</label>
                    <input type="password" id="password" placeholder="Please enter the password" />
                    <div class="btn-action">
                        <button class="btn btn-register">Register</button>
                        <div class="btn btn-log-in">Log in</div>
                    </div>
                </form>
            </div>
        </div>
    `;
    root.innerHTML = html;
    // console.log(root);
}

export function renderLogin() {
    const html = `
        <div class="container">
            <div class="form-action">
                <form action="" class="login-form form">
                    <label>Email</label>
                    <input type="email" class="form-control email" placeholder="Please enter the email">
                    <label>Password</label>
                    <input type="password" class="form-control password" placeholder="Please enter the password" />
                    <div class="btn-action">
                        <button class="btn btn-login">Log in</button>
                        <div class="btn btn-sign-up">Register</div>
                    </div>
                </form>
            </div>
        </div>
    `;
    root.innerHTML = html;
}

export function renderRegister() {
  const html = `
       <div class="container">
            <div class="form-action">
                <form action="" class="register-form form">
                    <label>Enter Your Name</label>
                    <input type="name" id="name" placeholder="Please enter the name">
                    <label>Enter Your email</label>
                    <input type="email" id="email" placeholder="Please enter the email">
                    <label>Enter Your password</label>
                    <input type="password" id="password" placeholder="Please enter the password" />
                    <div class="btn-action">
                        <button class="btn btn-register">Register</button>
                        <div class="btn btn-log-in">Log in</div>
                    </div>
                </form>
            </div>
        </div>
    `;
  root.innerHTML = html;
}

export function renderBlog() {
  var containerDiv = document.createElement("div");
  containerDiv.classList.add("container-blog");

  // Create form element
  var formElement = document.createElement("form");
  formElement.action = "";
  formElement.classList.add("form");
  formElement.classList.add("form-post");

  // Create title label
  var titleLabel = document.createElement("label");
  titleLabel.textContent = "Enter Your title";

  // Create title input
  var titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.classList.add("title-post");
  titleInput.placeholder = "Please enter the title";

  // Create content label
  var contentLabel = document.createElement("label");
  contentLabel.textContent = "Enter your content";

  // Create content textarea
  var contentTextarea = document.createElement("textarea");
  contentTextarea.cols = "30";
  contentTextarea.rows = "10";
  contentTextarea.placeholder = "Content here";
  contentTextarea.classList.add("content-post");

  // Create button
  var buttonElement = document.createElement("button");
  buttonElement.classList.add("btn") ;
  buttonElement.classList.add("btn-blog");
  buttonElement.textContent = "Write new!";

  // Append elements to the form
  formElement.appendChild(titleLabel);
  formElement.appendChild(titleInput);
  formElement.appendChild(contentLabel);
  formElement.appendChild(contentTextarea);
  formElement.appendChild(buttonElement);

  // Append form to the container
  containerDiv.appendChild(formElement);

  // Append container to the document body
  root.prepend(containerDiv);
}

export async function renderPost() {
    const { data: blogs, res } = await client.get(
      `/blogs?limit=${limit}&page=${page}`
    );
    if(res.ok) {
        const arr = blogs.data;
        const containerBlog = document.createElement("div");
        containerBlog.classList.add("container");
        arr.forEach((blog) => {
            const nameUser = blog.userId.name;
            const nameArr = nameUser.split(/\s+/);
            const charName = nameArr[nameArr.length - 1][0];
            const title = blog.title;
            let contentBlog = blog.content;
            contentBlog = contentBlog.replace(/[<>&'"\/=]/g, "");
            const blogItem = document.createElement("div");
            blogItem.classList.add("blog-item");
            const titleEl = document.createElement("div");
            titleEl.classList.add("title");
            titleEl.innerText = title;
            blogItem.append(titleEl);

            const contentEl = document.createElement("div");
            contentEl.classList.add("content");
            contentEl.innerText = contentBlog;
            blogItem.append(contentEl);

            const info = document.createElement("div");
            info.classList.add("info");

            const avatar = document.createElement("div");
            avatar.classList.add("avatar");
            avatar.classList.add("info-item");
            avatar.innerText = charName;
            info.append(avatar);

            const name = document.createElement("div");
            name.classList.add("name");
            name.classList.add("info-item");
            name.innerText = nameUser;
            info.append(name);

            const hrEl = document.createElement("hr");
            blogItem.prepend(info);
            containerBlog.append(blogItem);
            containerBlog.append(hrEl);
        });
        root.append(containerBlog);
        console.log(root);
    }
}
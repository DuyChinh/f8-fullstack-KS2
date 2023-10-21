import  HttpClient  from "./clients.js";
import {
     renderLogin, renderLoginRegister, renderRegister, renderBlog ,
     renderbtnLogout,
     renderPost
} from "./render.js";
const client = new HttpClient("https://api-auth-two.vercel.app");
// client.setUrl("https://api-auth-two.vercel.app");

// const handleLogin = async (data) => {
//     const { data: tokens } = await client.post("/auth/login", data);
//     console.log(tokens);
// }

// const btnSignIn = document.querySelector(".btn-sign-in");
// const formAction = document.querySelector(".form-action");
// const btnSignUp = document.querySelector(".btn-sign-up");
// const loginForm = formAction.querySelector(".login-form");
// const registerForm = formAction.querySelector(".register-form");
// const btnRegister = formAction.querySelector(".btn-register");
// const btnLogin = formAction.querySelector(".btn-login");
// btnSignIn.addEventListener("click", () => {
//     formAction.style.display = "block";
// });

// formAction.querySelector(".btn-log-in").addEventListener("click", () => {
//     loginForm.style.display = "flex";
//     registerForm.style.display = "none";
// });

// btnSignUp.addEventListener("click", () => {
//     loginForm.style.display = "none";
//     registerForm.style.display = "flex";
// });

// const handleAction = () => {
//     const nameLogin = formAction.querySelector(".name");
//     const emailLogin = formAction.querySelector(".email");
//     const passwordLogin = formAction.querySelector(".password");
//     loginForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         btnLogin.disabled = true;
//         // btnLogin.classList.add("active");
//         const email = emailLogin.value;
//         const password = passwordLogin.value;
//         console.log(email, password);
//         // console.log(email, password);
//         if(email && password) {
//             handleLogin({email, password});
//         }
//     });

//     const nameEl = formAction.querySelector("#name");
//     const emailEl = formAction.querySelector("#email");
//     const passwordEl = formAction.querySelector("#password");
//     registerForm.addEventListener("submit", (e) => {
//         e.preventDefault();
//         btnRegister.disabled = true;
//         // btnRegister.classList.add("active");
//         const name = nameEl.value;
//         const email = emailEl.value;
//         const password = passwordEl.value;
//         console.log(name, email,password);
//         if(name && email && password) {
//             handleRegister({email, password, name});
//         }
        
//     });
// }

// handleAction();

// const handleRegister = async({email, password, name}) => {
//     const { res, data } = await client.post("/auth/register", {email, password, name});
//     console.log(res, data);
//     if(res.ok) {
//         // btnRegister.classList.remove("active");
//         btnRegister.disabled = false;
//     }
//     btnRegister.disabled = false;
// }

// const handleLogin = async({email, password}) => {
//     const { res, data:database } =  await client.post("/auth/login", {email, password});
//     // console.log(res);
//     console.log(res, database);
//     if(res.ok) {
//         btnLogin.disabled = false;
//         // btnLogin.classList.remove("active");
//         localStorage.setItem("access_token", database.data.accessToken);
//         localStorage.setItem("refresh_token", database.data.refreshToken);
//         getProfile();
//     }
//     btnLogin.disabled = false;
// }

// async function getProfile() {
//     // console.log(localStorage.getItem("access_token"));
//     const { data: user, res } = await client.get(
//       "/users/profile", 
//       {},
//       localStorage.getItem("access_token")
//     );
//     console.log(res);
//     if(+res.status === 401) {
//         refreshToken();
//     }
// }

// const refreshToken = async() => {
//     const { res, data: tokens } = await client.post("/auth/refresh-token",
//     {
//         refreshToken: localStorage.getItem("refresh_token")
//     });
//     console.log(res);
//     if(res.ok) {
//         // console.log("fix");
//         localStorage.setItem("access_token", tokens.data.token.accessToken);
//         localStorage.setItem("refresh_token", tokens.data.token.refreshToken);
//     }
// }
const root = document.querySelector("#root");
const btnSignIn = document.querySelector(".btn-sign-in");
renderPost().then(() => {
  handlePostUp();
});
btnSignIn.addEventListener("click", () => {
  renderLoginRegister();
  const btnSignUp = document.querySelector(".btn-sign-up");
  const formAction = document.querySelector(".form-action");
  const loginForm = formAction.querySelector(".login-form");
  const registerForm = formAction.querySelector(".register-form");
  btnSignUp.addEventListener("click", () => {
    loginForm.style.display = "none";
    registerForm.style.display = "flex";
  });
  formAction.querySelector(".btn-log-in").addEventListener("click", () => {
      loginForm.style.display = "flex";
      registerForm.style.display = "none";
  });
  handleAction();
});

const handleAction = () => {
    const formAction = document.querySelector(".form-action");
    const nameLogin = formAction.querySelector(".name");
    const emailLogin = formAction.querySelector(".email");
    const loginForm = formAction.querySelector(".login-form");
    const btnLogin = formAction.querySelector(".btn-login");
    const passwordLogin = formAction.querySelector(".password");
      loginForm.addEventListener("submit", (e) => {
          e.preventDefault();
          btnLogin.disabled = true;
          btnLogin.classList.add("active");
          const email = emailLogin.value;
          const password = passwordLogin.value;
          console.log(email, password);
          // console.log(email, password);
          if(email && password) {
              handleLogin({email, password});
          }
      });
    const registerForm = formAction.querySelector(".register-form");
    const btnRegister = formAction.querySelector(".btn-register");
    const nameEl = formAction.querySelector("#name");
    const emailEl = formAction.querySelector("#email");
    const passwordEl = formAction.querySelector("#password");
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        btnRegister.disabled = true;
        // btnRegister.classList.add("active");
        const name = nameEl.value;
        const email = emailEl.value;
        const password = passwordEl.value;
        console.log(name, email,password);
        if(name && email && password) {
            handleRegister({email, password, name});
        }
    });
}


const handleLogin = async({email, password}) => {
    const { res, data:database } =  await client.post("/auth/login", 
    {email, password}
    );
    // console.log(res);
    const formAction = document.querySelector(".form-action");
    const btnLogin = document.querySelector(".btn-login");
    console.log(res, database);
    const divEL = document.createElement("div");
    divEL.classList.add("notice-register");
    divEL.style.background = "red";
    divEL.innerText = database.message;
    root.append(divEL);
    if(res.ok) {
      divEL.style.background = "greenyellow";
      btnLogin.disabled = false;
      btnLogin.classList.remove("active");
      localStorage.setItem("access_token", database.data.accessToken);
      localStorage.setItem("refresh_token", database.data.refreshToken);
      
      formAction.style.display = "none";
      divEL.style.display = "none";
      //renderBlog
    //   renderBlog();
      getProfile();
      // //avatar
      // const charUser = database.data.name[0];
      // const nameUser = database.data.name;
      // const containerDiv = document.createElement("div");
      // containerDiv.classList.add("container");
      // const userDiv = document.createElement("div");
      // userDiv.classList.add("user-block");
      
      // const divAvatar = document.createElement("div");
      // divAvatar.innerText = charUser;
      // divAvatar.classList.add("avatar-user");
      // userDiv.append(divAvatar);

      // const divName = document.createElement("div");
      // divName.innerText = nameUser;
      // divName.classList.add("name-user");
      // userDiv.append(divName);

      // containerDiv.append(userDiv);
      // root.prepend(containerDiv);
      renderPost().then(() => {
        handlePostUp();
      });
    }
    setTimeout(() => {
      divEL.classList.remove("notice-register");
      divEL.style.display = "none";
    }, 1500);
    btnLogin.disabled = false;
    btnLogin.classList.remove("active");

}

const handleRegister = async({email, password, name}) => {
    const { res, data } = await client.post("/auth/register", 
    {email, password, name});
    console.log(res, data);
    const btnRegister = document.querySelector(".btn-register");
    const loginForm = document.querySelector(".login-form");
    const registerForm = document.querySelector(".register-form");
    const divEL = document.createElement("div");
    divEL.classList.add("notice-register");
    divEL.style.background = "red";
    divEL.innerText = data.message;
    root.append(divEL);
    if(res.ok) {
      divEL.style.background = "greenyellow";
      registerForm.style.display = "none";
      loginForm.style.display = "flex";
      btnRegister.disabled = false;
      btnRegister.classList.remove("active");
    }
    setTimeout(() => {
        divEL.classList.remove("notice-register");
    }, 1500);
    btnRegister.disabled = false;
    btnRegister.classList.remove("active");
}

async function getProfile() {
  // console.log(localStorage.getItem("access_token"));
  const { data: user, res } = await client.get(
    "/users/profile",
    {},
    localStorage.getItem("access_token")
  );
  renderBlog();
  //avatar
  const charUser = user.data.name[0];
  const nameUser = user.data.name;
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  const userDiv = document.createElement("div");
  userDiv.classList.add("user-block");

  const divAvatar = document.createElement("div");
  divAvatar.innerText = charUser;
  divAvatar.classList.add("avatar-user");
  userDiv.append(divAvatar);

  const divName = document.createElement("div");
  divName.innerText = nameUser;
  divName.classList.add("name-user");
  userDiv.append(divName);

  containerDiv.append(userDiv);
  root.prepend(containerDiv);
  const formPost = root.querySelector(".form-post");
  formPost.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleEl = formPost.querySelector(".title-post");
    const contentEl = document.querySelector(".content-post");
    // console.log(titleEl, contentEl, localStorage.getItem("access_token"));
    const titleValue = titleEl.value;
    const contentValue = contentEl.value;
    const token = localStorage.getItem("access_token");
    if (titleValue && contentValue) {
      handlePost(titleValue, contentValue, token, titleEl, contentEl);
    }
  });
  //render logout
  renderbtnLogout();
  //Logout
  const btnlogOut = root.querySelector(".btn-log-out");
  btnlogOut.addEventListener("click", () => {
    console.log("ok");
    console.log(localStorage.getItem("access_token"));
    handleLogout(localStorage.getItem("access_token"));
  });
  if (+res.status === 401) {
    refreshToken();
  }
}

const refreshToken = async() => {
    const { res, data: tokens } = await client.post("/auth/refresh-token",
    {
        refreshToken: localStorage.getItem("refresh_token")
    });
    console.log(res);
    if(res.ok) {
        // console.log("fix");
        localStorage.setItem("access_token", tokens.data.token.accessToken);
        localStorage.setItem("refresh_token", tokens.data.token.refreshToken);
    }
}

const handleLogout =  async(tokens) => {
    const { data, res } = await client.post("auth/logout", {}, tokens);
    console.log(res);
    if(res.ok) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
    } else {
        console.log("error");
    }
}

const handlePost =  async(title, content, token, titleEl, contentEl) => {
    console.log(title, content);
    const { res, data } = await client.post("/blogs", 
    {title, content},
    {},
    token,
    );
    console.log(res, data);
    if(+res.status === 401) {
        refreshToken();
    }
    if(res.ok) {
        root.innerHTML = "";
        renderPost().then(() => {
            handlePostUp();
        });
        getProfile();
        titleEl.value = "";
        contentEl.value = "";
    }
    console.log(res, data);
}

const handlePostUp = () => {

}
















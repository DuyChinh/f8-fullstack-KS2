import  HttpClient  from "./clients.js";
import {
     renderLogin, renderLoginRegister, renderRegister, renderBlog ,
     renderbtnLogout, renderDatePicker,
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
      getProfile();
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

flatpickr("input[type=datetime-local]", {});
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
  const containerBlog = root.querySelector(".container-blog");

  //datepicker
  // const contentContainer = document.createElement("div");
  // contentContainer.classList.add("content-container");

  // const contentPost = document.createElement("label");
  // contentPost.classList.add("content-post");
  // contentPost.innerText = "Content bài viết";
  // contentContainer.append(contentPost);

  // const inputContent = document.createElement("textarea");
  // inputContent.classList.add("input-content");
  // inputContent.cols = 50;
  // inputContent.rows = 10;
  // inputContent.placeholder = "Vui lòng nhập content bài viết của bạn...";
  // contentContainer.append(inputContent);

  // containerFormBlog.append(contentContainer);

  // formPost.append(containerFormBlog);

  // Create the container element
  // const containerDate = document.createElement("div");
  // containerDate.classList.add("container");
  // containerDate.classList.add("form-child");

  // const titleSetTime = document.createElement("div");
  // titleSetTime.classList.add("title-set-time");
  // titleSetTime.innerText = "Hãy chọn thời gian đăng bài của bạn!";
  // containerDate.append(titleSetTime);

  // // Create the calendar element
  // const calendar = document.createElement("div");
  // calendar.classList.add("calendar");

  // // Create the calendar header
  // const calendarHeader = document.createElement("div");
  // calendarHeader.classList.add("calendar-header");

  // const calendarSet = document.createElement("div");
  // calendarSet.classList.add("calendar-set");

  // const monthPicker = document.createElement("span");
  // monthPicker.classList.add("month-picker");
  // monthPicker.id = "month-picker";
  // monthPicker.textContent = "May";

  // const yearPicker = document.createElement("div");
  // yearPicker.classList.add("year-picker");
  // yearPicker.id = "year-picker";

  // const preYear = document.createElement("span");
  // preYear.classList.add("year-change");
  // preYear.id = "pre-year";
  // preYear.innerHTML = "<pre><</pre>";

  // const year = document.createElement("span");
  // year.id = "year";
  // year.textContent = "2020";

  // const nextYear = document.createElement("span");
  // nextYear.classList.add("year-change");
  // nextYear.id = "next-year";
  // nextYear.innerHTML = "<pre>></pre>";

  // yearPicker.appendChild(preYear);
  // yearPicker.appendChild(year);
  // yearPicker.appendChild(nextYear);

  // calendarHeader.appendChild(monthPicker);
  // calendarHeader.appendChild(yearPicker);

  // // Create the calendar body
  // const calendarBody = document.createElement("div");
  // calendarBody.classList.add("calendar-body");

  // const calendarWeekDays = document.createElement("div");
  // calendarWeekDays.classList.add("calendar-week-days");
  // const weekDayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // weekDayNames.forEach((dayName) => {
  //   const dayElement = document.createElement("div");
  //   dayElement.textContent = dayName;
  //   calendarWeekDays.appendChild(dayElement);
  // });

  // const calendarDays = document.createElement("div");
  // calendarDays.classList.add("calendar-days");

  // calendarBody.appendChild(calendarWeekDays);
  // calendarBody.appendChild(calendarDays);

  // // Create the calendar footer
  // const calendarFooter = document.createElement("div");
  // calendarFooter.classList.add("calendar-footer");

  // // Create the date-time format
  // const dateTimeFormat = document.createElement("div");
  // dateTimeFormat.classList.add("date-time-formate");

  // const dayTextFormat = document.createElement("div");
  // dayTextFormat.classList.add("day-text-formate");
  // dayTextFormat.textContent = "TODAY";

  // const dateTimeValue = document.createElement("div");
  // dateTimeValue.classList.add("date-time-value");

  // const timeFormat = document.createElement("div");
  // timeFormat.classList.add("time-formate");
  // timeFormat.textContent = "02:51:20";

  // const dateFormat = document.createElement("div");
  // dateFormat.classList.add("date-formate");
  // dateFormat.textContent = "23 - july - 2022";

  // dateTimeValue.appendChild(timeFormat);
  // dateTimeValue.appendChild(dateFormat);

  // dateTimeFormat.appendChild(dayTextFormat);
  // dateTimeFormat.appendChild(dateTimeValue);

  // // Create the month list
  // const monthList = document.createElement("div");
  // monthList.classList.add("month-list");

  // // Append the created elements to build the structure
  // calendar.appendChild(calendarSet);
  // calendar.appendChild(calendarHeader);
  // calendar.appendChild(calendarBody);
  // calendar.appendChild(calendarFooter);
  // calendar.appendChild(dateTimeFormat);
  // calendar.appendChild(monthList);

  // containerDate.appendChild(calendar);

  // formPost.append(containerDate);

  // const btnSubmitWrap = document.createElement("div");
  // btnSubmitWrap.classList.add("btn-submit-wrap");
  // const btnPost = document.createElement("button");
  // btnPost.classList.add("btn-post");
  // btnPost.classList.add("btn-animation");
  // btnPost.innerText = "Đăng bài";
  // btnSubmitWrap.append(btnPost);

  // formPost.append(btnSubmitWrap);

  // containerBlog.append(formPost);

  // root.append(containerBlog);

  // renderDatePicker();

  const standardString = (str) => {
    if(+str < 10) {
      return "0" + str;
    }
    return str;
  }

  const conditionPost = (timeTotal) => {
    const today = new Date();
    if(today.getTime() === timeTotal.getTime()) {
      return true;
    }
    return false;
  }

  formPost.addEventListener("submit", (e) => {
    e.preventDefault();
    const titleEl = formPost.querySelector(".title-post");
    const contentEl = document.querySelector(".content-post");
    const timeEl = formPost.querySelector(".calendar");
    // console.log(timeEl.value);
    const timePost = new Date();
    let datePost = "Time post: "+ standardString(timePost.getDate()+1) + " - "+ standardString(timePost.getMonth()) +  " - " + timePost.getFullYear()+ "  " +  standardString(timePost.getHours()) + ":" + standardString(timePost.getMinutes());
    // console.log(datePost);
    formPost.querySelector(".notice-timePost").innerText = datePost;
    // console.log(titleEl, contentEl, localStorage.getItem("access_token"));
    const titleValue = titleEl.value;
    const contentValue = contentEl.value;
    const token = localStorage.getItem("access_token");
    if (titleValue && contentValue && conditionPost(timePost.getTime())) {
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
    // console.log("refresh token: ");
    // console.log(res, tokens);
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
      console.log("error");
        refreshToken();
        
        // getProfile();
    }
    if(res.ok) {
        root.innerHTML = "";
        renderPost().then(() => {
            handlePostUp();
        });
        getProfile();
        titleEl.value = "";
        contentEl.value = "";
    } else {
      // handlePost();
    }
}

const handlePostUp = () => {

}
















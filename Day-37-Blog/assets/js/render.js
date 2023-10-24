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

   var titleLabel2 = document.createElement("label");
   titleLabel2.textContent = "Choose date post";

   // Create title input
   var titleInput2 = document.createElement("input");
   titleInput2.type = "datetime-local";
   titleInput2.classList.add("calendar");
   titleInput2.placeholder = "Please enter the title";

   var pEl = document.createElement("p");
   pEl.classList.add("notice-timePost");


  // Append elements to the form
  formElement.appendChild(titleLabel);
  formElement.appendChild(titleInput);
  formElement.appendChild(contentLabel);
  formElement.appendChild(contentTextarea);
  formElement.appendChild(pEl);
  formElement.appendChild(titleInput2);
  formElement.appendChild(buttonElement);

  // Append form to the container
  containerDiv.appendChild(formElement);
  root.prepend(containerDiv);
}

export async function renderUser() {
    
}

export async function renderPost() {
    const { data: blogs, res } = await client.get(
      `/blogs?limit=${limit}&page=${page}`
    );
    const standardString = (str) => {
      if (+str < 10) {
        return "0" + str;
      }
      return str;
    };
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

            const pEl = document.createElement("p");
            pEl.classList.add("time-post-user");
            const timePost = new Date(blog.createdAt);
            let datePost =
              "Time: " +
              standardString(timePost.getDate()) +
              " - " +
              standardString(timePost.getMonth()+1) +
              " - " +
              timePost.getFullYear() +
              "  " +
              standardString(timePost.getHours()) +
              ":" +
              standardString(timePost.getMinutes());
            pEl.innerText = datePost;
            blogItem.prepend(info);
            containerBlog.append(blogItem);
            containerBlog.append(pEl);
            containerBlog.append(hrEl);
        });
        root.append(containerBlog);
        console.log(root);
    }
}

export function renderDatePicker() {
  const isLeapYear = (year) => {
    return (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  };

  const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };

  let calendar = document.querySelector(".calendar");
  const month_names = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month_picker = document.querySelector("#month-picker");
  const dayTextFormate = document.querySelector(".day-text-formate");
  const timeFormate = document.querySelector(".time-formate");
  const dateFormate = document.querySelector(".date-formate");

  month_picker.onclick = () => {
    month_list.classList.remove("hideonce");
    month_list.classList.remove("hide");
    month_list.classList.add("show");
    dayTextFormate.classList.remove("showtime");
    dayTextFormate.classList.add("hidetime");
    timeFormate.classList.remove("showtime");
    timeFormate.classList.add("hideTime");
    dateFormate.classList.remove("showtime");
    dateFormate.classList.add("hideTime");
  };

  const generateCalendar = (month, year) => {
    let calendar_days = document.querySelector(".calendar-days");
    const calendarSetEl = document.querySelector(".calendar-set");
    calendar_days.innerHTML = "";
    let calendar_header_year = document.querySelector("#year");
    let days_of_month = [
      31,
      getFebDays(year),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];

    let currentDate = new Date();

    month_picker.innerHTML = month_names[month];

    calendar_header_year.innerHTML = year;

    let first_day = new Date(year, month);

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
      let day = document.createElement("div");

      if (i >= first_day.getDay()) {
        day.innerHTML = i - first_day.getDay() + 1;

        if (
          i - first_day.getDay() + 1 === currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
          day.classList.add("current-date");
        }

        day.addEventListener("click", (event) => {
          event.stopPropagation();
          const selectedDay = parseInt(event.target.textContent);
          const selectedMonth = currentMonth.value;
          const selectedYear = currentYear.value;

          const selectedDate = new Date(
            selectedYear,
            selectedMonth,
            selectedDay
          );

          const currentDate = new Date();
          var timeDifference = selectedDate - currentDate;

          // You can use the selectedDay, selectedMonth, and selectedYear as needed
          console.log(`Selected Date: ${selectedDay}`);
          console.log(`Selected Month: ${month_names[selectedMonth]}`);
          console.log(`Selected Year: ${selectedYear}`);

          // To get the current time, you can use the existing timer (as it updates every second)
          const currentTime = todayShowTime.textContent;
          console.log(`Current Time: ${currentTime}`);

          // Calculate days and time
          const daysDifference = Math.floor(
            timeDifference / (1000 * 60 * 60 * 24)
          );
          const timeDifferenceMillis = timeDifference % (1000 * 60 * 60 * 24);
          const hoursDifference = Math.floor(
            timeDifferenceMillis / (1000 * 60 * 60)
          );
          const minutesDifference = Math.floor(
            (timeDifferenceMillis % (1000 * 60 * 60)) / (1000 * 60)
          );

          // Calculate the time difference string
          let timeDifferenceString = "";
          if (daysDifference > 0) {
            timeDifferenceString += `${daysDifference} ngày${
              daysDifference > 1 ? "" : ""
            } `;
          }
          if (hoursDifference > 0) {
            timeDifferenceString += `${hoursDifference} giờ${
              hoursDifference > 1 ? "" : ""
            } `;
          }
          if (minutesDifference > 0) {
            timeDifferenceString += `${minutesDifference} phút${
              minutesDifference > 1 ? "" : ""
            }`;
          }

          if (timeDifferenceString === "") {
            timeDifferenceString = "Vui lòng chọn lại thời gian đăng";
          } else {
            timeDifferenceString = `Bài viết của bạn sẽ được đăng sau ${timeDifferenceString} lúc ${selectedYear} ${month_names[selectedMonth]} ${selectedDay}, ${currentTime}`;
          }

          // Update the calendarSetEl with the time difference string
          calendarSetEl.innerText = timeDifferenceString;
          Toastify({
            text: timeDifferenceString,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #6a3093, #a044ff)",
              borderRadius: "10px",
              color: "#fff",
            },
          }).showToast();
        });

        calendar_days.appendChild(day);
      }
    }
  };

  let month_list = calendar.querySelector(".month-list");
  month_names.forEach((e, index) => {
    let month = document.createElement("div");
    month.innerHTML = `<div>${e}</div>`;

    month_list.append(month);
    month.onclick = () => {
      currentMonth.value = index;
      generateCalendar(currentMonth.value, currentYear.value);
      month_list.classList.replace("show", "hide");
      dayTextFormate.classList.remove("hideTime");
      dayTextFormate.classList.add("showtime");
      timeFormate.classList.remove("hideTime");
      timeFormate.classList.add("showtime");
      dateFormate.classList.remove("hideTime");
      dateFormate.classList.add("showtime");
    };
  });

  (function () {
    month_list.classList.add("hideonce");
  })();
  document.querySelector("#pre-year").onclick = () => {
    --currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  };
  document.querySelector("#next-year").onclick = () => {
    ++currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
  };

  let currentDate = new Date();
  let currentMonth = { value: currentDate.getMonth() };
  let currentYear = { value: currentDate.getFullYear() };
  generateCalendar(currentMonth.value, currentYear.value);

  const todayShowTime = document.querySelector(".time-formate");
  const todayShowDate = document.querySelector(".date-formate");

  const currshowDate = new Date();
  const showCurrentDateOption = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  const currentDateFormate = new Intl.DateTimeFormat(
    "en-US",
    showCurrentDateOption
  ).format(currshowDate);
  todayShowDate.textContent = currentDateFormate;

  setInterval(() => {
    const timer = new Date();
    const option = {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    };
    const formateTimer = new Intl.DateTimeFormat("en-US", option).format(timer);
    todayShowTime.textContent = formateTimer;
  }, 1000);
}
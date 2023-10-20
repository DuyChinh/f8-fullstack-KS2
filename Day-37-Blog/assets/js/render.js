
const root = document.querySelector("#root");
// console.log(root);

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
    var html = `
        <div class="container">
            <button class="btn btn-sign-in">Sign in</button>
            <form action="" class="form-blog form">
                <label for="">Enter Your title</label>
                <input type="text" class="title-post" placeholder="Please enter the title">
                <label for="">Enter your content</label>
                <textarea name="" id="textarea-blog"cols="30" rows="10" placeholder="Content here"></textarea>
                <button class="btn btn-blog">Write new!</button>
            </form>
        </div>
    `;
    root.innerHTML = html;
}
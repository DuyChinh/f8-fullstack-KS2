var inputPassword = document.querySelector("#password");
var openPassword = document.querySelector(".user-enter-password__open");
var hiddenPassword = document.querySelector(".user-enter-password__hidden");
var overlay = document.querySelector(".overlay");
var signIn = document.querySelector(".sign-up__link");
var userAction = document.querySelector(".userAction");
var email = document.querySelector("#email");
var error = document.querySelector(".error");
var passwordError = document.querySelector(".password-error");
/*Password */
hiddenPassword.addEventListener("click", function () {
    openPassword.classList.add("show-password");
    inputPassword.setAttribute("type", "text");
    hiddenPassword.classList.remove("show-password");
});

var hiddenPass = function () {
    openPassword.classList.remove("show-password");
    hiddenPassword.classList.add("show-password");
    inputPassword.setAttribute("type", "password");
};

openPassword.addEventListener("click", hiddenPass);
/*End password */
signIn.addEventListener("click", function () {
    userAction.classList.add("show");
});
var form = document.querySelector("form");
var formUp = document.querySelector(".form-2");
var resetAction = function () {
    errorName.classList.remove("show");
    errorSignUp.classList.remove("show-error");
    passwordErrorSignUp.classList.remove("show-error");
    nameInput.style.border = "1px solid #ccc";
    emailSignup.style.border = "1px solid #ccc";
    passwordSignup.style.border = "1px solid #ccc";
};

var resetActionIn = function () {
    error.classList.remove("show-error");
    passwordError.classList.remove("show-error");
    alertAccount.classList.remove("show-alert");
    inputPassword.style.border = "1px solid #ccc";
    email.style.border = "1px solid #ccc";
};

overlay.addEventListener("click", function () {
    form.reset();
    formUp.reset();
    resetAction();
    resetActionIn();
    // email.value = "";
    // inputPassword.value = "";
    userAction.classList.remove("show");
    // error.classList.remove("show-error");
    // passwordError.classList.remove("show-error");
    // alertAccount.classList.remove("show-alert");
    // inputPassword.style.border = "1px solid #ccc";
    // passwordSignup.style.border = "1px solid #ccc";
    // email.style.border = "1px solid #ccc";
    // emailSignup.style.border = "1px solid #ccc";
    // signIn.classList.add("active");
    // signUp.classList.remove("active");
    // formSignIn.classList.add("active");
    // formSignUp.classList.remove("active");
});

email.addEventListener("input", function () {
    var emailValue = email.value;
    if (emailValue.includes("@gmail.com")) {
        email.style.border = "1px solid #ccc";
        error.classList.remove("show-error");
    } else {
        email.style.border = "1px solid red";
        inputPassword.style.border = "1px solid red";
        if (emailValue.length === 0) {
            error.innerText = "Vui lòng nhập thông tin";
        } else {
            error.innerText = "Vui lòng nhập đúng định dạng email";
        }
        error.classList.add("show-error");
        passwordError.classList.add("show-error");
    }
});

inputPassword.addEventListener("input", function () {
    var passwordValue = inputPassword.value;
    if (passwordValue !== "") {
        inputPassword.style.border = "1px solid #ccc";
        passwordError.classList.remove("show-error");
    } else {
        inputPassword.style.border = "1px solid red";
        passwordError.classList.add("show-error");
    }
});

var btnForm = document.querySelector(".btn-form");
var alertAccount = document.querySelector(".alert-account");
var submitForm = function (event) {
    event.preventDefault();
};

btnForm.addEventListener("click", submitForm);
btnForm.addEventListener("click", function () {
    if (email.value === "" || inputPassword.value === "") {
        email.style.border = "1px solid red";
        inputPassword.style.border = "1px solid red";
        passwordError.classList.add("show-error");
        error.classList.add("show-error");
    } else {
        alertAccount.classList.add("show-alert");
    }
});

var signIn = document.querySelector(".sign-in-form");
var signUp = document.querySelector(".sign-up-form");
var formSignIn = document.querySelector(".form-sign-in");
var formSignUp = document.querySelector(".form-sign-up");

signIn.addEventListener("click", function () {
    formSignIn.classList.add("active");
    formSignUp.classList.remove("active");
    signUp.classList.remove("active");
    signIn.classList.add("active");
    formUp.reset();
    resetAction();
});

signUp.addEventListener("click", function () {
    formSignIn.classList.remove("active");
    formSignUp.classList.add("active");
    signUp.classList.add("active");
    signIn.classList.remove("active");
    form.reset();
    resetActionIn();
});
/*End form-sign-in */
var errorSignUp = document.querySelector(".form-sign-up .error");
var passwordErrorSignUp = document.querySelector(
    ".form-sign-up .password-error"
);
var emailSignup = document.querySelector("#email-2");
var passwordSignup = document.querySelector("#password-2");
var btnSignUp = document.querySelector(".form-sign-up .btn-form");
var alertAccountSignUp = document.querySelector(".form-sign-up .alert-account");

emailSignup.addEventListener("input", function () {
    var emailValue = emailSignup.value;
    if (emailValue.includes("@gmail.com")) {
        emailSignup.style.border = "1px solid #ccc";
        errorSignUp.classList.remove("show-error");
    } else {
        emailSignup.style.border = "1px solid red";
        passwordSignup.style.border = "1px solid red";
        if (emailValue.length === 0) {
            errorSignUp.innerText = "Vui lòng nhập thông tin";
        } else {
            errorSignUp.innerText = "Vui lòng nhập đúng định dạng email";
        }
        errorSignUp.classList.add("show-error");
        passwordErrorSignUp.classList.add("show-error");
    }
});

passwordSignup.addEventListener("input", function () {
    var passwordValue = passwordSignup.value;
    if (passwordValue !== "") {
        passwordSignup.style.border = "1px solid #ccc";
        passwordErrorSignUp.classList.remove("show-error");
    } else {
        passwordSignup.style.border = "1px solid red";
        passwordErrorSignUp.classList.add("show-error");
    }
});

var openPasswordSignUp = document.querySelector(
    ".form-sign-up .user-enter-password__open"
);
var hiddenPasswordSignUp = document.querySelector(
    ".form-sign-up .user-enter-password__hidden"
);

hiddenPasswordSignUp.addEventListener("click", function () {
    openPasswordSignUp.classList.add("show-password");
    passwordSignup.setAttribute("type", "text");
    hiddenPasswordSignUp.classList.remove("show-password");
});
var hiddenPass = function () {
    openPasswordSignUp.classList.remove("show-password");
    hiddenPasswordSignUp.classList.add("show-password");
    passwordSignup.setAttribute("type", "password");
};
openPasswordSignUp.addEventListener("click", hiddenPass);

var nameInput = document.querySelector("#name");
var errorName = document.querySelector(".error-name");
var showError = function () {
    nameInput.style.border = "1px solid red";
    emailSignup.style.border = "1px solid red";
    passwordSignup.style.border = "1px solid red";
    errorName.classList.add("show");
    errorSignUp.classList.add("show-error");
    passwordErrorSignUp.classList.add("show-error");
};

nameInput.addEventListener("input", function () {
    if (nameInput.value === "") {
        showError();
    } else {
        nameInput.style.border = "1px solid #ccc";
        errorName.classList.remove("show");
    }
});

btnSignUp = document.querySelector(".btn-sign-up");
btnSignUp.addEventListener("click", submitForm);
btnSignUp.addEventListener("click", function () {
    if (
        nameInput.value === "" ||
        emailSignup.value === "" ||
        passwordSignup === ""
    ) {
        showError();
    }
});

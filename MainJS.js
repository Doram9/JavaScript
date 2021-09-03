const LogInForm = document.querySelector("#login-form");
const LogInInput = LogInForm.querySelector("input");
const LogInButton = LogInForm.querySelector("button");

function handleLoginSubmit(tomato) {
    tomato.preventDefault();
    const userName = LogInInput.value;
    console.log(tomato);
}

LogInForm.addEventListener("submit", handleLoginSubmit);
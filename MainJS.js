const LogInForm = document.querySelector("#login-form"); //로그인 폼을 담는 변수
const LogInInput = LogInForm.querySelector("#username"); //로그인에 적은 이름을 담는 변수
const Greeting = document.querySelector("#greeting"); //h1을 담는 변수
const HIDDEN_CLASSNAME = "hidden"; //hidden을 담는 변수
const USERNAME_KEY = "username"; //유저명을 담는 변수

function handleLoginSubmit(event) { //submit을 컨트롤 하는 함수
    event.preventDefault(); //이벤트 발생을 막는 함수
    LogInForm.classList.add(HIDDEN_CLASSNAME);
    const username = LogInInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings();
}

function paintGreetings() { //h1 요소를 보여주고 유저명을 나타내는 함수
    const username = localStorage.getItem("username");
    Greeting.innerText = `Hello ${username}`;
    Greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("username"); //로컬스토리지에서 유저명을 가져와 담는 변수
if(savedUsername == null) {
    LogInForm.classList.remove(HIDDEN_CLASSNAME);
    LogInForm.addEventListener("submit", handleLoginSubmit); //submit이 발생했을 때 실행되는 함수
} else {
    paintGreetings();
}
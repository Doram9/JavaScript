const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-List");
const toDoInput = toDoForm.querySelector("input");

let toDos = []; //배열
const TODOS_KEY = "todos"

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //key : todos, value : toDos
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const value = toDoInput.value;
    toDoInput.value = "";
    const newTodoOj = {
        text:value,
        id:Date.now(),
    }
    toDos.push(newTodoOj); //입력값을 배열에 저장
    paintToDO(newTodoOj); //입력값을 paintToDo로 전달
    saveToDos(); //입력값을 local storage에 저장
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id)); //toDo는 toDos 배열안에 있는 각각의 요소(text와 id)
    li.remove();
    saveToDos();
}

function paintToDO(newTodoOj) { //입력한 값을 HTML로 표현
    const li = document.createElement("li");
    li.id = newTodoOj.id; //로컬 저장소에 저장된 id를 li태그의 아이디로 이식
    const span = document.createElement("span");
    const button = document.createElement("button");
    button.innerText = "삭제";
    button.addEventListener("click", deleteToDo);
    span.innerText = newTodoOj.text;
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

toDoForm.addEventListener("submit", handleToDoSubmit);


const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos) { //과거에 저장한 입력값이 있으면
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDO); //localStorage에 저장되어있는 입력값들의 array들을 각각 paint로 저장
}

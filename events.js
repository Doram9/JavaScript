const h1 = document.querySelector("h1"); //왼쪽 h1은 html의 h1선택자를 담는다.
function handleMouseEnter() {
    // const clickedClass = "clicked"; //클래스를 담을 변수(clickedClass)를 생성
    // if(h1.classList.contains(clickedClass)) { //만약 h1의 클래스에 clickedClass 라는 이름의 클래스가 포함되어 있다면
    //     h1.classList.remove(clickedClass); //clickedClass를 제거
    // } else {
    //     h1.classList.add(clickedClass); //clickedClass를 추가
    // }
    h1.classList.toggle("clicked") //toggle : 클래스명을 검색하여 해당 클래스명이 있으면 제거하고, 없으면 생성한다.
}
h1.addEventListener("click", handleMouseEnter);
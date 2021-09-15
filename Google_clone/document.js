const title = document.querySelector(".hello h1") //querySelector : element를 css 방식으로 검색할 수 있음.
console.log(title);


function handleTitleClick(){
    title.style.color = "blue";
    console.log("title was clicked!");
}
function handleMouseEnter(){
    console.log("mouse is here");
}

title.addEventListener("click", handleTitleClick);
title.addEventListener("mouseenter", handleMouseEnter);
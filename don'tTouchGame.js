const block = document.querySelector("#top");
console.log(block);
function handleMouseEnter(){
    alert("I said don't touch");
}

block.addEventListener("mouseenter", handleMouseEnter);
const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d"); //Context는 화면에 렌더링될 대상

ctx.strokeStyle = "#2c2c2c";
ctx.linewidth = 2.5;
canvas.width = 500;
canvas.height = 500;

let painting = false;
function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath(); //패스 열기
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function startPainting(){
    painting = true;
}

function stopPainting(event) {
    painting = false;
}
if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}
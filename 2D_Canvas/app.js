const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d"); //Context는 화면에 렌더링될 대상
const color = document.querySelectorAll(".jsColor");
const range = document.querySelector("#jsRange");
const mode = document.querySelector("#jsMode");
const save = document.querySelector("#jsSave");
const DEFAULT_COLOR = "#2c2c2c";
const CANVAS_SIZE = 500;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.lineWidth = 2.5; //width, height 를 먼저 설정해주고 lineWidth를 지정해줘야함.
ctx.strokeStyle = DEFAULT_COLOR; //선 스타일, width, height 를 먼저 설정해주고 lineWidth를 지정해줘야함.
ctx.fillStyle = DEFAULT_COLOR;

let filling = false;
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

function stopPainting() {
    painting = false;
}

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

function handleLineWidth(event) {
    const width = event.target.value;
    ctx.lineWidth = width;
}

function handleMode(event) {
    if(filling) {
        filling = false;
        mode.innerText = "Fill";
    } else {
        filling = true;
        mode.innerText = "Paint";
    }
}

function handleCanvasClick() {
    if(filling) {
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function handleCM(event) {
    event.preventDefault();
}

function handleSaveClick() {
    const image = canvas.toDataURL("image/jpeg");
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS";
    link.click();
    console.log(link);
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu", handleCM);
}

Array.from(color).forEach(color => color.addEventListener("click", handleColorClick));

if(range) {
    range.addEventListener("input", handleLineWidth);
}

if(mode) {
    mode.addEventListener("click", handleMode);
}

if(save) {
    save.addEventListener("click", handleSaveClick);
}
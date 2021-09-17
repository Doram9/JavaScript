const canvas = document.querySelector("#captcha");
const ctx = canvas.getContext("2d");
const mes = document.querySelector("#mes");
const CANVASSIZE = 400;
canvas.width =  CANVASSIZE;
canvas.height = CANVASSIZE;

//도형 사이즈 : canvas 사이즈 / 10
const figsize = CANVASSIZE / 10;


let color = ['#2c2c2c', '#FF3B30', '#0579FF'];
let colorName = ["빨강색", "검정색", "파랑색"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function canvasReset() {
    ctx.clearRect(0, 0, CANVASSIZE, CANVASSIZE);
}

function fill() {
    for(let i = 0; i < color.length; i++) {
        let x = Math.round(Math.random() * (figsize * 7)) + figsize;
        let y;
        if(i==0) {
            y = Math.round(Math.random() * figsize) + figsize;
        } else if(i==1) {
            y = Math.round(Math.random() * figsize) + figsize * 4;
        } else {
            y = Math.round(Math.random() * figsize) + figsize * 7;
        }

        ctx.fillStyle = color[i];
        ctx.fillRect(x,y, figsize, figsize);
    }
}
shuffle(colorName);
mes.innerText = colorName[0] + "을 클릭하십시오";
shuffle(color);
fill();


function handleFig(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    const clickedColor = ctx.getImageData(x, y, 1, 1);
    let test = clickedColor.data[0];
    if(colorName[0] == "빨강색" && test == 255) {
        alert("통과");
    } else if(colorName[0] == "파랑색" && test == 5) {
        alert("통과");
    } else if(colorName[0] == "검정색" && test == 44) {
        alert("통과");
    } else {
        alert("실패");
        canvasReset();
        shuffle(color);
        shuffle(colorName);
        mes.innerText = colorName[0] + "을 클릭하십시오";
        fill();
    }
}

canvas.addEventListener("click", handleFig);
const canvas = document.querySelector("#captcha");
const ctx = canvas.getContext("2d");
const CANVASSIZE = 400;
canvas.width =  CANVASSIZE;
canvas.height = CANVASSIZE;


//도형 사이즈 : canvas 사이즈 / 10
const figsize = CANVASSIZE / 10;


let x = Math.round(Math.random() * (figsize * 7)) + figsize;
let y = Math.round(Math.random() * figsize) + figsize;

ctx.fillStyle = 'black';
ctx.fillRect(x,y, figsize, figsize);

x = Math.round(Math.random() * (figsize * 7)) + figsize;
y = Math.round(Math.random() * figsize) + figsize * 4;

ctx.fillStyle = 'red';
ctx.fillRect(x,y, figsize, figsize);

x = Math.round(Math.random() * (figsize * 7)) + figsize;
y = Math.round(Math.random() * figsize) + figsize * 7;

ctx.fillStyle = 'blue';
ctx.fillRect(x,y, figsize, figsize);
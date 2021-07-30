var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");
var body = document.querySelector("body");
var colorPicked = document.querySelector("input");
let colorPickedVal;

colorPicked.addEventListener("input", colorChanged);

function colorChanged() {
  colorPickedVal = colorPicked.value;
  console.log(colorPickedVal);
}

console.log(body.offsetWidth)
cuadrito.width = body.offsetWidth - 32;
cuadrito.height = 700;

let x= 0, y= 0;
let isDrawing = false;

cuadrito.addEventListener("mousedown", pressMouse);
function pressMouse(event) {
  x = event.offsetX;
  y = event.offsetY;
  isDrawing = true;
}

cuadrito.addEventListener("mousemove", moveMouse);
function moveMouse(event) {
  if(isDrawing == true) {
    dibujarLinea(colorPickedVal, x, y, event.offsetX, event.offsetY, papel);
    x = event.offsetX;
    y = event.offsetY;
  }
}

cuadrito.addEventListener("mouseup", releaseMouse);
function releaseMouse(event) {
  isDrawing = false;
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo)
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 1;
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

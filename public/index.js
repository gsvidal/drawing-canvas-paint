var cuadrito = document.querySelector(".area_draw");
var papel = cuadrito.getContext("2d");
var body = document.querySelector("body");
var colorPicked = document.querySelector(".input_color");
var thickness = document.querySelector(".input_thickness");

var pencilButton = document.querySelector(".pencil")
var eraserButton = document.querySelector(".eraser")
var colorPickedVal, thicknessVal = thickness.value;
var lastPickedVal = "#000000";

colorPicked.addEventListener("input", colorChanged);
thickness.addEventListener("input", thicknessChanged);
eraserButton.addEventListener("click", eraser);
pencilButton.addEventListener("click", pincel);

function pincel() {
  cuadrito.classList.remove("eraser_cursor");
  eraserButton.classList.remove("eraser_activated");
  pencilButton.classList.remove("pencil_desactivated");
  colorPickedVal = lastPickedVal;
  
}

function colorChanged() {
  colorPickedVal = colorPicked.value;
  lastPickedVal = colorPickedVal;
}
function thicknessChanged() {
  thicknessVal = thickness.value;
}
function eraser() {
    cuadrito.classList.add("eraser_cursor");
    eraserButton.classList.add("eraser_activated");
    pencilButton.classList.add("pencil_desactivated");
    colorPickedVal = "#ffffff";
}
//Mouse movements logic
cuadrito.width = body.offsetWidth - 32;
cuadrito.height = 700;

let x= 0, y= 0;
let isDrawing = false;
console.log(isDrawing)


cuadrito.addEventListener("mousedown", pressMouse);
function pressMouse(event) {
  x = event.offsetX;
  y = event.offsetY;
  isDrawing = true;
  console.log(isDrawing)
  dibujarLinea(colorPickedVal, x, y, x, y, papel);
}

cuadrito.addEventListener("mousemove", moveMouse);
function moveMouse(event) {
  if(isDrawing == true) {
    dibujarLinea(colorPickedVal, x, y, event.offsetX, event.offsetY, papel);
    x = event.offsetX;
    y = event.offsetY;
    console.log("x:" + x);
    console.log("y:" + y);
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
  lienzo.lineWidth = thicknessVal;
  lienzo.lineCap = "round";
  lienzo.moveTo(xinicial, yinicial);
  lienzo.lineTo(xfinal, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

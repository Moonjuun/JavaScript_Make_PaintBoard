const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const range = document.getElementById("jsRange");


//컨버스 크기
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c"; // 우리가 그릴 선들은 모두 이 색을 갖는다
ctx.lineWidth = 2.5; // 라인의 너비가 2.5

let painting = false;

function stopPainting() {
    painting = false;
  }

function startPainting() {
    painting = true;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath(); // path는 선이다, path를 만들면 마우스의 x,y, 좌표로 path를 옮긴다
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y); // lineTo는 path의 이전 위치에서 지금 위치까지 선을 만드는 것
        ctx.stroke();
      } // lineTo()와 stroke()는 마우스를 움직이는 내내 발생한다! 마우스를 움직이는 동안 계속 발생한다!
}


function onMouseUp(event){
    painting = false;
}

function onMouseLeave(event){
    painting = false;
}

function handleRangeChange(event) {
    const size = event.target.value;
    ctx.lineWidth = size;
  }

function handleColorClick(event) {
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color; // strokeStyle이 target에 있는 색상이 된다!
    ctx.fillStyle = color;
  }

if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color =>
    color.addEventListener("click", handleColorClick)
  );
  
if (range) {
    range.addEventListener("input", handleRangeChange);
}
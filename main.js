canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
mouseEvent = "empty";
lastPosX = 0;
lastPosY = 0;
color = "black";
width = 1;
radius=20;

canvas.addEventListener("mousedown", myMouseDown);
function myMouseDown(e) {
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e) {
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e) {
    mouseEvent = "mouseLeave";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e) {
    CusPosX = e.clientX - canvas.offsetLeft;
    CusPosY = e.clientY - canvas.offsetTop;
    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(CusPosX,CusPosY,radius,0,2*Math.PI);
        ctx.stroke();
    }

    lastPosX = CusPosX;
    lastPosY = CusPosY;
}



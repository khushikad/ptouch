canvas= document.getElementById("mycanvas");
 ctx = canvas.getContext("2d");

 var mouseevent;
 var oldx,oldy;
 var currentx, currenty;
var color;
var width_of_line;
var radius;

 canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
mouseevent="mousedown";
color=document.getElementById("color");
width_of_line=document.getElementById("width_of_line");
radius=document.getElementById("radius");
    
}

canvas.addEventListener("mouseup",mymouseup);
function mymouseup(e){
    mouseevent="mouseup";
}
 
canvas.addEventListener("mouseleave",mymouseleave);
 function mymouseleave(e){
mouseevent="mouseleave";

 }

 canvas.addEventListener("mousemove",mymousemove);

function mymousemove(e){
    mouseevent="mousemove";
    currentx=e.clientX-canvas.offsetLeft;
    currenty=e.clientY-canvas.offsetTop;
    
    if (mouseevent=="mousedown"){
    ctx.beginPath();
    ctx.strokeStyle="black";
    ctx.lineWidth= 3;
    ctx.moveTo(oldx,oldy);
    ctx.lineTo(currentx,currenty);
    ctx.stroke();}
    oldx=currentx;
    oldy=currenty;
    




}

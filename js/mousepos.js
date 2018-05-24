"use strict"

let mouseX = 0.5*window.innerWidth;
let mouseY = 0.55*window.innerHeight;

const updateMousePos = function(event)
{
    mouseX = event.clientX;
    mouseY = event.clientY;
}
document.addEventListener("mousemove", updateMousePos);

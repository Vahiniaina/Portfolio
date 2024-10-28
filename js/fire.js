const coords = { x:0, y:0};
const circles = document.querySelectorAll(".circle");

circles.forEach(function(circle,index){
    circle.x= 0;
    circle.y= 0;
});
console.log("begin");
console.log(circles);
console.log("end");
window.addEventListener("mousemove", function(e) {
    coords.x=e.clientX;
    coords.y=e.clientY;

    console.log(coords);

    animateCircles();
    
});

function animateCircles() {
    let x =  coords.x;
    let y = coords.y;
    
    circles.forEach(function(circle, index){
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";

        circle.style.scale = (circles.length - index ) / circles.length;

        // circle.x=x;
        // circle.y=y;

        // const nextCircle = circle[index + 1] || circle[0];

        // x += (nextCircle.x - x) * 0.3;
        // y += (nextCircle.y - y) *0.3;
        
    });
}
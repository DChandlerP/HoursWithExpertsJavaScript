let cat = document.querySelector("#cat");
let hat = document.querySelector("#hat");
let angle = 0;
let lastTime = null;

function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    const catTop = (Math.sin(angle) * 20) + 40;
    const catLeft = (Math.cos(angle) * 200) + 250;
    cat.style.top = catTop + "px";
    cat.style.left = catLeft + "px";
    hat.style.top = (Math.sin(angle*3) * 60) + catTop - 20 + "px";
    hat.style.left = (Math.cos(angle*3) *80) + catLeft + "px";
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
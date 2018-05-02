document.body.addEventListener("mousemove", funcyMovement);

const elements = [];
const numberofElements = 15;
for (let i = 0; i < numberofElements; i++) {
    let element = document.createElement('div');
    //because I'm adding CSS styles
    element.className = 'trails';
    document.body.appendChild(element);
    elements.push(element);
}

let counter = 0; // current trail element index
function funcyMovement(event) {
    const maxTrails = numberofElements -1;
    elements[counter].style.left = event.clientX + 'px';
    elements[counter].style.top = event.clientY + 'px';
    if (counter === maxTrails) {
        counter = 0;
    } else {
        counter += 1;
    }
}
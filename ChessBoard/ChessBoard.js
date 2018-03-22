/*
I'd seen these problems somewhere before, maybe in the 2nd version, so I already knew the answers. I decided to play
around with parts of the language I'm less familiar with.
 */

const xSize = parseInt(prompt("Enter the size of the Horizontal Axis that's between 1-9 inclusive "), 10);
const ysize = parseInt(prompt("Enter the size of the Vertical Axis that's between 1-9 inclusive "), 10);

if(isValid(xSize) && isValid(ysize)) {
    console.log(createBoard(xSize, ysize));
}
else {
    window.alert("One of the sizes you entered wasn't between 1-9. Refresh and try again!");
}


function createBoard(xsize, ysize) {
    let output = "";
    for (let i = 0; i < ysize; i++){
        for (let j = 0; j < xsize ; j++) {
            isSumofXandYOdd(i, j) ? output+= "#" : output += " ";
        }
        output += "\n";
    }
    return output
}

function isSumofXandYOdd(x_counter, y_counter) {
    return ((x_counter + y_counter) & 1) === 1;
}

function isValid(int) {
    return int < 10 && int > 0;
}



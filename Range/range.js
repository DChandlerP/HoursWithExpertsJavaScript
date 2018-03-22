//I want this to function like the Python Range function which isn't quite what the book asked for.
console.log("Sum with only end of range", sum(range(5)));
console.log("Sum with Start and Stop", sum(range(1, 6)));
console.log("Sum with Start, Stop, and a negative increment", sum(range(10, 1, -2)));

//Accepts Arguments of Variable Length. Default start is 0. Default increment is 1.
function range(start, stop, step) {
    if (arguments.length === 1) return loop(0, start, 1);
    else if(arguments.length ===2) return loop(start, stop, 1);
    else  return loop(start, stop, step)
}

function loop(beginning, end, increment) {
    let array = [];
    if (beginning <= end) {
        for (let i = beginning; i <= end; i += increment) {
            array.push(i)
        }
        return array;
    }
    else {
        for (let i = beginning; i >= end; i += increment){
            array.push(i)
        }
        return array;
    }
}

function sum(arr) {return arr.reduce((a,b)=>a+b)}

//Recursion has an overhead cost.
function loop(val, test, update, body) {
    if (!!test(val)){
        body(val);
        val = update(val);
        loop(val, test, update, body);
    }
}

//Faster without recursion but left my first answer to compare times.
function nonRecursiveLoop(val, test, update, body) {
    while (!!test(val)){
        body(val);
        val = update(val);
    }
}
console.time("Recursiveloop");
nonRecursiveLoop(3, n => n > 0, n => n - 1, console.log);
console.timeEnd("Recursiveloop");


console.time("Non Recursive loop");
loop(3, n => n > 0, n => n - 1, console.log);
console.timeEnd("Non Recursive loop");

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.1) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure("Klunk");
    }
}

/*
The book tells you that a while loop is a way to keep the stack from overflowing. A successful return exits the loop.
a && b only fails to run if you give it a falsy value: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */
function reliableMultiply(a, b) {
    while (a && b) {
        try{
            return primitiveMultiply(a, b);
        }
        catch(err) {
            if (err instanceof MultiplicatorUnitFailure){
                console.log("Failure caused by our random failure creator ", err)
            }
        }
    }
}

console.log(reliableMultiply(8, 8));
// → 64
const int1 = prompt("Enter a number: ");
if (isNumeric(int1)) {
    console.log(isEven(int1));
    }
else {
    console.log("I checked, what you entered wasn't a number");
}

function isEven(n) {
    if (n === 0 || n === 1) {
        return n === 0;
    }
    else {
        return n > 0 ? isEven(n-2) : isEven(n+2);
    }
}

//Prompt takes strings. This functions looks at the ASCII value of each char in the string.
function isNumeric(str) {
    let code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58)) return false;
    }
    return true;
}
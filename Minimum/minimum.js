const int1 = prompt("Enter the first number: ");
const int2 = prompt("Enter the second Number: ");

if (isNumeric(int1) && isNumeric(int2)) {
    console.log(min(int1, int2));
}
else {
    console.log("We checked, one of the numbers you entered wasn't a number")
}

function min(int1, int2) {
    console.log("Is it running the latest code?")
    return int1 <= int2 ? int1 : int2;
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

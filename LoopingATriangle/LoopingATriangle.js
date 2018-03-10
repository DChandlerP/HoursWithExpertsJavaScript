const integer = prompt("Enter the triangle base size");

if (isNumeric(integer)){
    let string = "";
    for (let idx = 0; idx < integer; idx++){
        console.log(string += '#');
    }
}

function isNumeric(str) {
    let code, i, len;

    for (i = 0, len = str.length; i < len; i++) {
        code = str.charCodeAt(i);
        if (!(code > 47 && code < 58)) return false;
    }
    return true;
}

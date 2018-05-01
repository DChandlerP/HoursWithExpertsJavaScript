function parseExpression(program) {
    program = skipSpace(program);
    let match, expr;

    /*
    ^asserts position at beginning of string.
    \S is a negation of \s
    .exec() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
    1st conditional seems to match something between quotes.
    2nd conditional is looking for one or more #s ending with a word boundary.
    3rd conditional is looking for a whitespace parentheses, comma, or double quotes.
    match is storing the array return by exec(). If exec returns null it returns as null.
     */

    if (match = /^"([^"]*)"/.exec(program)) {
        expr = {type: "value", value: match[1]};
    }
    else if (match = /^\d+\b/.exec(program)) {
        expr = {type: "value", value: Number(match[0])};
    } else if (match = /^[^\s(),"]+/.exec(program)) {
        expr = {type: "word", name: match[0]};
    } else {
        throw new SyntaxError("Unexpected syntax: " + program);
    }

    return parseApply(expr, program.slice(match[0].length));
}

/*
Function cuts whitespace off the start of a program string
.search() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
 */
function skipSpace(string) {
    //returns and index for first match of non-whitespace
    let first = string.search(/\S/);
    if (first === -1) return "";
    //Should return a string with everything before index removed
    return string.slice(first);
}

function parseApply(expr, program) {
    program = skipSpace(program);
    if (program[0] !== "(") {
        //It's an object with an object in the expr field and a string w/ /s removed in the rest field.
        return {expr: expr, rest: program};
    }
    program = skipSpace(program.slice(1));

    console.log("expr: ", expr);

    expr = {type: "apply", operator: expr, args: []};

    console.log("Expr nested in an Object: ", expr.toString());

    while (program[0] !== ")") {
        let arg = parseExpression(program);
        console.log("arg.expr: ", arg.expr);
        expr.args.push(arg.expr);
        program = skipSpace(arg.rest);
        if (program[0] === ",") {
            program = skipSpace(program.slice(1));
        } else if (program[0] !== ")") {
            throw new SyntaxError("Expected ',' or ')'");
        }
    }
    return parseApply(expr, program.slice(1));
}
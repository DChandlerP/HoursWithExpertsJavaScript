const string = prompt("Enter a String");
const char = prompt("Enter the char you want to count: ");
console.log(beanCount(string, char));
console.log("Bs", countBs(string));

function beanCount(string, char) {
    let beans = 0;
    for (let i = 0; i < string.length; i++){
        if (string.charAt(i) === char) beans++;
    }
    return beans;
}

function countBs(string) {
    return beanCount(string, "B");
}
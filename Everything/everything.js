function every(array, test) {
    let len1 = array.length;
    let len2 = array.filter(test).length;
    return len1 === len2;
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true
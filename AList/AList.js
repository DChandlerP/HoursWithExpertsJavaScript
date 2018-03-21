// function arrayToList(arr) {
//     let list = null;
//     let lastIdx = arr.length;
//     arr.forEach(function(i) {
//         list = {value: arr[lastIdx-i], rest: list};
//     });
//     return list;
// }

function arrayToList(arr) {
    let list = null;
    let lastIdx = arr.length - 1;
    for(let i = lastIdx; i >= 0; i--) {
        list = { value: arr[i], rest: list };
    }
    return list;
}


function listToArray(node) {
    let arr = [];
    //Uses JS magic where node is true until null because it's truthy
    for(let list = node; node; node = node.rest) {
        arr.push(node.value);
    }
    return arr;
}

function prepend(ele, list){
    let arr = listToArray(list);
    arr.unshift(ele);
    return arrayToList(arr);
}

function nth(list, index) {
    const arr = listToArray(list);
    const nextIndex = (index + 1) > arr.length ? arr.length : (index +1);
    return arr.slice(index, nextIndex).toString();
}

console.log(arrayToList([10, 20, 30]));
console.log(listToArray(arrayToList([10, 20, 30])));
console.log(prepend(10, prepend(20, null)));
console.log(nth(arrayToList([10, 20, 30]), 1));

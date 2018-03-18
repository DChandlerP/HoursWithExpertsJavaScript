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
};

console.log(arrayToList([10, 20, 30]));

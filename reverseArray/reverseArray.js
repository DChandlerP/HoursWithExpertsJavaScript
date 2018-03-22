function reverseArray(array) {
    let idx = array.length -1;
    let reversedArray = [];
    for (idx; idx >=0; idx--){
        reversedArray.push(array[idx]);
    }
    return reversedArray;
}


function reverseArrayInPlace(array) {
    return array.map((currentValue , index) => array[array.length-1-index])
}



const array = [0, 1, 2, 3, 4, 5, 6, 7, 9, 8];
console.log(reverseArray(array));
console.log(reverseArrayInPlace(array));
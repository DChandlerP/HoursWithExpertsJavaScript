function deepEqual(obj1, obj2) {
    if (isObject(obj1) && isObject(obj2)){
        if (Object.is(obj1, obj2)){
            console.log("Object.is says they're the same: ");
            return true;
        }
        let a = JSON.stringify(obj1);
        let b = JSON.stringify(obj2);
        return a === b;
    }else {
        return false;
    }
}
function isObject(obj) {
    if (obj && typeof obj === 'object'){
        return true
    }
    console.log("Not an Object");
    return false
}

const obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));







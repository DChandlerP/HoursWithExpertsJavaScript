function deepEqual(obj1, obj2) {
    if (isObject(obj1) && isObject(obj2)){
        if (Object.is(obj1, obj2)){
            console.log("Object.is says they're the same: ");
            return true;
        }
        let obj1String = JSON.stringify(obj1);
        let obj2String = JSON.stringify(obj2);
        return obj1String === obj2String;
    }else {
        return false;
    }
}
function isObject(obj) {
    return !!(obj && typeof obj === 'object');

}

const obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));







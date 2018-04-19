class Group {
    constructor(group) {
        this.pGroup = [];
    }

    static from(object) {
        let groupBuilder = new Group({
            pGroup: []
        });
        object.forEach((value) => groupBuilder.pGroup.push(value));
        return groupBuilder;
    }

    has(value) {
        return this.pGroup.includes(value);
    }

    add(value) {
        if (!this.pGroup.includes(value)) {
            this.pGroup.push(value);
        }
    }

    delete(value) {
        if (this.pGroup.includes(value)) {
            const idx = this.pGroup.indexOf(value);
            return this.pGroup.splice(idx, 1);
        }
    }

}

Group.prototype[Symbol.iterator] = function() {
    return new IterableGroup(this);
};

class IterableGroup {
    constructor(group) {
        this.position = 0;
        this.pGroup = group;
    }
    //says it's unused in my linter, but I believe it's being used by value "of" pGroup.
    next() {
        if (this.position < this.pGroup.pGroup.length) {
            let value = {
                value: this.pGroup.pGroup[this.position],
                done: false
            };
            this.position++;
            return value;
        }
        else {
            return {done: true};
        }

    }
}

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}


let group = Group.from([10, 20]);
console.log("Had 10: ", group.has(10));
// → true
console.log("Has 30: ", group.has(30));
// → false
group.add(10);
group.add(30);
console.log("delete: ", group.delete(10));
console.log("Has 10 after delete: ", group.has(10));
// → false
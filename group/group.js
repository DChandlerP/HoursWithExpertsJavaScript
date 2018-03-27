class Group {
    constructor(group) {
        this.group = [];
    }

    static from(object) {
        let groupBuilder = new Group({
            group: []
        });
        object.forEach((value) => groupBuilder.group.push(value));
        return groupBuilder;
    }

    has(value) {
        return this.group.includes(value);
    }

    add(value) {
        if (!this.group.includes(value)) {
            this.group.push(value);
        }
    }
    // Wanted to use filter but had some issues.
    delete(value) {
        if (this.group.includes(value)) {
            const idx = this.group.indexOf(value);
            return this.group.splice(idx, 1);
        }
    }

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
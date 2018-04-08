class pGroup {
    constructor(group) {
        this.pGroup = [];
    }

    static from(object) {
        let groupBuilder = new pGroup({
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
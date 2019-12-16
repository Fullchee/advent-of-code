const readLines = require("../readLines.js");

class Tree {
    constructor(name) {
        this.name = name;
        this.children = {};
    }
}


const objects = {};

(async function partOne() {
    await readLines(((line) => {
        const [parent, child] = line.split(')');
        if (!(parent in objects)) {
            objects[parent] = new Tree();
        }

    }));
    getClosestIntersection(wires);
})();

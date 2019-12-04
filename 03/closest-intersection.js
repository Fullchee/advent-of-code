const readLines = require("../readLines.js");

const wires = [];

(async function partOne() {
    await readLines(((line) => {
        wires.push(line.split(','));
    }));
    getClosestIntersection(wires);
})();

function getClosestIntersection(wires) {
    const [first, second] = getAllPoints(wires);

    const intersections = Object.keys(first).filter({}.hasOwnProperty.bind(second)).map((point) => {
        // part 1
        // const [x, y] = point.split(',');
        // return Math.abs(x) + Math.abs(y);

        // part 2
        return first[point] + second[point];
    });

    const smallest = intersections.sort((a,b) => a - b)[0];
    console.log(smallest);
    return smallest; // return the min
}

function getAllPoints(wires) {
    const memo = [{}, {}];
    const DX = {'L': -1, 'R': 1, 'U': 0, 'D': 0};
    const DY = {'L': 0, 'R': 0, 'U': 1, 'D': -1};
    // memo crossing with itself
    for (let j in wires) {
        const wire = wires[j];
        let x = 0, y = 0, steps = 0;
        wire.forEach((path) => {
            const d = path[0];  // LRUD
            const n = parseInt(path.slice(1));  // steps

            for (let i = 0; i < n; i += 1) {
                steps++;
                x += DX[d]
                y += DY[d]
                const point = `${x},${y}`;
                memo[j][point] = steps;
            }
        });
    }
    return memo;
}

const eg1 = [
    "R75,D30,R83,U83,L12,D49,R71,U7,L72",
    "U62,R66,U55,R34,D71,R55,D58,R83"
].map((line) => line.split(','));
const eg2 = [
    "R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51",
    "U98,R91,D20,R16,D67,R40,U7,R15,U6,R7"
].map((line) => line.split(','));
console.assert(getClosestIntersection(eg1) === 159, "eg1");
console.assert(getClosestIntersection(eg2) === 135, "eg2");

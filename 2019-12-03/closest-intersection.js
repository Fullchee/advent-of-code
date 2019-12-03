const readLines = require("../readLines.js");

const memo = {};
const wires = [];

async function partOne() {
    await readLines(((line) => {
        wires.push(line.split(','));
    }));
    // brute force: get the 2d array of all the visited points
    const set = new Set();
    DX = {'L': -1, 'R': 1, 'U': 0, 'D': 0};
    DY = {'L': 0, 'R': 0, 'U': 1, 'D': -1};
    wires.forEach((wire) => {
        wire.forEach((path) => {
            const d = path[0];
            const n = parseInt(path.slice(1));

            for (let i = 0; i < n; i += 1) {
                x += DX[d]
                y += DY[d]
                
            }
             length += 1
             if (x,y) not in ans:
                 ans[(x,y)] = length
        });
    });
}

partOne();

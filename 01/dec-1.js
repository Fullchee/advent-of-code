const readline = require('readline');
const fs = require('fs');

async function readLineByLine(fn) {
    const input = readline.createInterface({
        input: fs.createReadStream("2019-12-01.txt"),
        crlfDelay: Infinity
    });

    for  await (const line of input) {
        fn(line);
    }
}

async function partOne() {
    let sum = 0;
    await readLineByLine((line) => {
        // convert to number
        let num = parseInt(line);
        sum += Math.floor(num / 3) - 2;
    })
    console.log(sum);
}

async function partTwo() {
    let sum = 0;
    function calculateFuel(line) {
        let addedWeight = parseInt(line);

        while (addedWeight > 0) {
            addedWeight = Math.max(Math.floor(addedWeight / 3) - 2, 0);
            sum += addedWeight;
        }
    }
    try {
        await readLineByLine(calculateFuel);
    } catch (e) {
        console.log(e);
    }
    console.log(sum);
}

partTwo();

const fs = require('fs');
const readline = require('readline');
module.exports = async function(fn, fileName) {
    fileName = fileName || "input.txt";
    const input = readline.createInterface({
        input: fs.createReadStream(fileName),
        crlfDelay: Infinity
    });
    for  await (const line of input) {
        fn(line);
    }
}

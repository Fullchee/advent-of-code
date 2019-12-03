const fs = require("fs");
const file = fs.readFileSync("input.txt", "utf-8");
// const file = "1,9,10,3,2,3,11,0,99,30,40,50";
const originalSeq = file.split(",").map(Number);

// replace position 1 with the value 12
function calculateOutput(noun, verb) {
  const seq = JSON.parse(JSON.stringify(originalSeq));
  seq[1] = noun;
  seq[2] = verb;
  let i = 0;
  for (let i = 0; i + 3 < seq.length; i += 4) {
    const opcode = seq[i];
    const input1 = seq[seq[i + 1]];
    const input2 = seq[seq[i + 2]];
    const outputPointer = seq[i + 3];

    switch (opcode) {
      case 1:
        // add
        seq[outputPointer] = input1 + input2;
        break;
      case 2:
        // multiply
        seq[outputPointer] = input1 * input2;
        break;
      case 99:
        // end
        return seq[0];
      default:
        throw new Error("Opcode should only be 1, 2 or 99");
    }
  }
}

// part 1
// calculateOutput(12, 2)

const TARGET = 19690720;
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (calculateOutput(i, j) === TARGET) {
      console.log(100 * i + j);
      return;
    }
  }
}

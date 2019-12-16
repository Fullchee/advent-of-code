const fs = require("fs");
const file = fs.readFileSync("input.txt", "utf-8");
// const file = "1,9,10,3,2,3,11,0,99,30,40,50";
const originalSeq = file.split(",").map(Number);

// replace position 1 with the value 12
// input = 1: air conditioning unit
function calculateOutput(noun, verb, input = 1) {
  const seq = JSON.parse(JSON.stringify(originalSeq));
  seq[1] = noun;
  seq[2] = verb;
  let i = 0;
  while (i < seq.length) {
    let input1, input2, outputPointer;
    // 1002 => 
    const opcode = seq[i];

    function getValue(ptr, mode) {
      return mode ? ptr : seq[ptr];
    }

    switch (opcode) {
      case 1:
        // add
        input1 = seq[seq[i + 1]];
        input2 = seq[seq[i + 2]];
        outputPointer = seq[i + 3];
        seq[outputPointer] = input1 + input2;
        i += 4;
        break;
      case 2:
        // multiply
        input1 = seq[seq[i + 1]];
        input2 = seq[seq[i + 2]];
        outputPointer = seq[i + 3];
        seq[outputPointer] = input1 * input2;
        i += 4;
        break;
      case 3:
        outputPointer = input2;
        // 3,50 =>
        i += 3;
        break;
      case 4:
        // output only param
        i += 3;
        break;
      case 99:
        // end
        return seq[0];
      default:
        throw new Error(`Unknown opcode found: ${opcode}`);
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

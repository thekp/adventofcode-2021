const fs = require("fs");

function part1() {
  fs.readFile("./src/day1/input.txt", "utf-8", (err, file) => {
    const lines = file.split("\n");

    let count = 0;
    for (let x = 0; x < lines.length; x++) {
      if (x > 0) {
        if (Number(lines[x - 1]) < Number(lines[x])) {
          count++;
        }
      }
    }
    // console.log(count); answer
  });
}

part1();

function part2() {
  fs.readFile("./src/day1/input.txt", "utf-8", (err, file) => {
    const lines = file.split("\n");

    let count = 0;
    for (let x = 0; x < lines.length; x++) {
      if (lines[x + 3]) {
        const sum1 =
          Number(lines[x]) + Number(lines[x + 1]) + Number(lines[x + 2]);
        const sum2 =
          Number(lines[x + 1]) + Number(lines[x + 2]) + Number(lines[x + 3]);

        console.log({ sum1, sum2 });

        if (sum1 < sum2) {
          count++;
        }
      }
    }
    // console.log(count); answer
  });
}

part2();

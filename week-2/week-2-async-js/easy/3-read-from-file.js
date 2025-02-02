const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  if (err) {
    console.log("Error while reading the file");
  }

  console.log("File contents", data);

  return;
});

let sum = 0;

function someExpensiveOperation() {
  for (let i = 0; i < 1e18; i++) {
    sum += 1;
    console.log(sum);
  }
}

someExpensiveOperation();

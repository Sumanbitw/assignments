const fs = require("fs");

function writeToFile(filePath, content) {
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      console.log("Error while writing to file", err);
    } else {
      console.log("File has been written successfully");
    }
  });
}

writeToFile("a.txt", "Hi, How are you doing");

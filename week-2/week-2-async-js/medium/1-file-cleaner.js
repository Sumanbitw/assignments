const fs = require("fs");

function cleanFile(filePath) {
  fs.readFile(filePath, "utf-8", function (err, data) {
    if (err) {
      console.log("Error while reading the file");
      return;
    }
    const content = data.replace(/\s+/g, " ").trim();

    fs.writeFile(filePath, content, (error) => {
      if (error) {
        console.log("Error while writing to file");
        return;
      }

      console.log("File written successfully");
      return;
    });
  });
}

cleanFile("example.txt");

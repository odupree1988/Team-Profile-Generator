const fs = require("fs");

const writeFile = (htmlData) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/index.html", htmlData, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Employee(s) created successfully!",
      });
    });
  });
};

module.exports = { writeFile };

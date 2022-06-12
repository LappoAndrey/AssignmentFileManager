import fs from "fs";

export const read = async (file, currentCat) => {
  fs.readFile(file, "utf8", function (error, fileContent) {
    if (error) throw new Error("FS operation failed");
    console.log(fileContent);
    console.log(`You are currently in ${currentCat}`);
  });
};

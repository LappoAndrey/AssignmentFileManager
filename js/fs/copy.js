import fs from "fs";
import path from "path";

export const copy = async (oldFile, newFile, currentCat) => {
  fs.copyFile(oldFile, newFile, function (err) {
    if (err) throw err;
  });
  if (currentCat.length >= 1) {
    console.log(`You are currently in ${currentCat}`);
  }
};

import fs from "fs";
import path from "path";

export const rename = async (oldFile, newFile, currentCat) => {
  fs.rename(oldFile, newFile, (err) => {
    if (err) throw new Error("FS operation failed");
    console.log(`You are currently in ${currentCat}`);
  });
};

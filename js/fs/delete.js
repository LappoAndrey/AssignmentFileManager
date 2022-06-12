import fs from "fs";

export const remove = async (File, currentCat) => {
  fs.unlink(File, (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
    console.log(`You are currently in ${currentCat}`);
  });
};

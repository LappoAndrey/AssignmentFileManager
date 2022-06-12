import { Transform } from "stream";
import fs from "fs";

export const transform = async () => {
  const reverseString = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().split("").reverse().join("") + "\n");
    },
  });

  process.stdin
    .on("data", (inputStdin) => {
      const tryExit = inputStdin.toString().trim();
      if (tryExit == "close") {
        process.exit(0);
      }
    })
    .pipe(reverseString)
    .on("data", (data) => process.stdout.write(data));
};

transform();

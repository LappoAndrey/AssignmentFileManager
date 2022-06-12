import { createGunzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

export const decompress = async () => {
  const gUnzip = createGunzip();
  const source = createReadStream("./files/archive.gz");
  const destination = createWriteStream("./files/fileToCompress.txt");

  pipeline(source, gUnzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

decompress();

import { createGzip } from "node:zlib";
import { pipeline } from "node:stream";
import { createReadStream, createWriteStream } from "node:fs";

export const compress = async () => {
  const gzip = createGzip();
  const source = createReadStream("./files/fileToCompress.txt");
  const destination = createWriteStream("./files/archive.gz");

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

compress();

import fs from "fs";

export const read = async () => {
  const file = fs.createReadStream("./files/fileToRead.txt");
  file.on("data", (data) => process.stdout.write(data));
};

read();

import fs from "fs";

export const write = async () => {
  const file = fs.createWriteStream("./files/fileToWrite.txt");
  process.stdin.on("data", (inputStdin) => {
    const tryExit = inputStdin.toString().trim();
    if (tryExit == "close") {
      process.exit(0);
    } else file.write(inputStdin);
  });
};

write();

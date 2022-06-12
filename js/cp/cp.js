import { spawn } from "child_process";

export const spawnChildProcess = async (args) => {
  const childFile = "./files/script.js";
  const child = spawn("node", [childFile, ...args]);
  child.stdout.on("data", (data) => {
    process.stdout.write(data);
  });
  child.stderr.on("data", (data) => {
    process.stderr.write(data);
  });
  process.stdin.on("data", (data) => {
    const buffer = Buffer.from(data.toString().trim());
    child.stdin.write(buffer);
  });
  child.on("close", (code) => {
    process.exit(code);
  });
};

spawnChildProcess(process.argv.slice(2));

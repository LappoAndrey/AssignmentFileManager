import { parseUserName } from "./js/cli/args.js";
import { list } from "./js/fs/list.js";
import { read } from "./js/fs/read.js";
import { create } from "./js/fs/create.js";
import { rename } from "./js/fs/rename.js";
import { copy } from "./js/fs/copy.js";
import { remove } from "./js/fs/delete.js";
import { calculateHash } from "./js/hash/calcHash.js";

import os from "os";
import fs from "fs";

export const start = async (oldFile, newFile) => {
  const userName = parseUserName();
  console.log(`Welcome to the File Manager, ${userName}!`);
  const exitMessage = `Thank you for using File Manager, ${userName}!`;
  let currentCat = os.userInfo().homedir;
  console.log(`You are currently in ${currentCat}`);
  process.on("SIGINT", () => {
    console.log(exitMessage);
    process.exit(0);
  });

  process.stdin.on("data", (inputStdin) => {
    let workFile =
      currentCat + "\\" + inputStdin.toString().trim().split(" ")[1];
    let toFile = currentCat + "\\" + inputStdin.toString().trim().split(" ")[2];
    switch (inputStdin.toString().trim().split(" ")[0]) {
      case ".exit": {
        console.log(exitMessage);
        process.exit(0);
      }
      case "up":
        {
          if (currentCat.split("\\").length > 1) {
            currentCat = currentCat.split("\\").slice(0, -1).join("\\");
            console.log(`You are currently in ${currentCat}`);
          }
        }
        break;
      case "cat":
        {
          read(workFile, currentCat);
        }
        break;
      case "add":
        {
          create(workFile, currentCat);
        }
        break;
      case "rn":
        {
          rename(workFile, toFile, currentCat);
        }
        break;
      case "cp":
        {
          copy(workFile, toFile, currentCat);
        }
        break;
      case "mv":
        {
          copy(workFile, toFile, "");
          remove(workFile, currentCat);
        }

        break;

      case "hash":
        {
          calculateHash(workFile, currentCat);
        }

        break;

      case "rm":
        {
          remove(workFile, currentCat);
        }
        break;
      case "ls":
        {
          list(currentCat);
        }
        break;
      case "cd":
        {
          fs.stat(workFile, function (err, stats) {
            if (err || stats.isFile()) {
              console.log("Directory not found");
            } else {
              currentCat =
                currentCat + "\\" + inputStdin.toString().trim().split(" ")[1];
              console.log(`You are currently in ${currentCat}`);
            }
          });
        }
        break;
      default:
        console.log("Invalid input");
    }
  });

  // .on("data", (data) => process.stdout.write(data));
};

start();

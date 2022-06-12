import process from "process";

export const parseUserName = () => {
  const myArgs = process.argv.slice(2);
  let userName = "";
  if (myArgs.length !== 1 && myArgs.includes("--username=") == false) {
    console.log("Invalid input");
  } else {
    userName += myArgs[0].split("=")[1];
    return userName;
  }
};

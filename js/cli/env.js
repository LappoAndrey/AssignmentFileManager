import process from "process";

export const parseEnv = () => {
  const myArgs = process.argv.slice(2);
  let result = "";
  myArgs.forEach((val, index) => {
    if (val.includes("RSS_")) {
      result += `${val}; `;
    }
  });
  console.log(result.substring(0, result.length - 2));
};

parseEnv();

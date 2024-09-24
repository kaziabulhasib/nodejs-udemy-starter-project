const fs = require("fs");
const http = require("http");
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
console.log(textIn);

const textOut = `This is what we know about avocado: ${textIn}. \n created at ${Date.now()}`;

fs.writeFileSync("./txt/output.txt", textOut);

fs.writeFileSync;

console.log("file is written");

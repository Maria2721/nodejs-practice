// a readable stream used for reading data

const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "source.txt");

const stream = fs.createReadStream(filePath, "utf-8");

let data = "";

stream.on("data", (chunk) => (data += chunk));
stream.on("end", () => console.log("End", data));
stream.on("error", (error) => console.log("Error", error.message));

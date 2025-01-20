// a writable stream used for writing data

const fs = require("fs");
const path = require("path");

// Path to the level above the current directory (__dirname) and further into the "readable-stream" folder
const filePathRead = path.join(
	__dirname,
	"..",
	"readable-stream",
	"source.txt"
);
const filePathWrite = path.join(
	__dirname,
	"..",
	"writable-stream",
	"destination.txt"
);

const input = fs.createReadStream(filePathRead, "utf-8");
const output = fs.createWriteStream(filePathWrite);

input.on("data", (chunk) => output.write(chunk));
input.on("error", (error) => console.log("Error", error.message));

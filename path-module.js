// It allows you to get the file name, file extension, folder name, and specify the path to the file.

const path = require("path");

// Retrieving file data
console.log(path.basename(__filename)); // index.js - file name on Windows, full file path on POSIX systems
console.log(path.dirname(__filename)); // C:\Users\Admin\Desktop\nodejs-basic - folder name
console.log(path.extname(__filename)); // .js - file extension
console.log(path.parse(__filename)); // returns an object specifying the disk root, folder name, file name, file extension, file name without extension

// Concatenating paths
console.log(path.join(__dirname, "test", "second.html"));
console.log(path.resolve(__dirname, "./test", "/second.html"));

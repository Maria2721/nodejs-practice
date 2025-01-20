// It allows you to get the file name, file extension, folder name, and specify the path to the file.

const fs = require("fs");
const path = require("path");

// create a folder named notes in the current directory
fs.mkdir(path.join(__dirname, "notes"), (err) => {
	if (err) throw err;
	console.log("Folder was created");
});

// create a file named mynotes.txt containing the text Hello world inside the notes folder
fs.writeFile(
	path.join(__dirname, "notes", "mynotes.txt"),
	"Hello world",
	(err) => {
		if (err) throw err;
		console.log("File was created");
	}
);

// add more information to the file
fs.appendFile(
	path.join(__dirname, "notes", "mynotes.txt"),
	" From append file",
	(err) => {
		if (err) throw err;
		console.log("File was modified");
	}
);

// read the information from the file
fs.readFile(
	path.join(__dirname, "notes", "mynotes.txt"),
	"utf-8",
	(err, data) => {
		if (err) throw err;
		console.log(data);
	}
);

// rename the file
fs.rename(
	path.join(__dirname, "notes", "mynotes.txt"),
	path.join(__dirname, "notes", "notes.txt"),
	(err) => {
		if (err) throw err;
		console.log("File renamed");
	}
);

const fs = require("fs");

class NotesManager {
	constructor(filename) {
		this.filename = filename;
	}

	init() {
		fs.writeFile(this.filename, "[]", (error) => {
			if (error) return console.error(error.message);
		});
	}

	readNotes(callback) {
		fs.readFile(this.filename, (error, data) => {
			if (error) {
				if (error.code === "ENOENT") {
					this.init();
					return callback([]);
				} else {
					return console.error(error.message);
				}
			} else {
				callback(JSON.parse(data));
			}
		});
	}

	writeNotes(notes, callback) {
		fs.writeFile(this.filename, JSON.stringify(notes), (error) => {
			if (error) return console.error(error.message);
			if (callback) callback();
		});
	}

	create(title, content) {
		this.readNotes((notes) => {
			notes.push({ title, content });
			this.writeNotes(notes, () => console.log("Заметка создана"));
		});
	}

	list() {
		this.readNotes((notes) => {
			notes.forEach((note, index) =>
				console.log(`${index + 1}) ${note.title}: ${note.content}`)
			);
		});
	}

	view(title) {
		this.readNotes((notes) => {
			const note = notes.find((note) => note.title === title);
			if (note) {
				console.log(note.content);
			} else {
				console.log("Заметка не найдена");
			}
		});
	}

	remove(title) {
		this.readNotes((notes) => {
			const updatedNotes = notes.filter((note) => note.title !== title);
			this.writeNotes(updatedNotes, () => console.log("Заметка удалена"));
		});
	}

	deleteFile() {
		fs.unlink(this.filename, (error) => {
			if (error) {
				if (error.code === "ENOENT") {
					console.log("Файл заметок не существует");
				} else {
					console.error(error.message);
				}
			} else {
				console.log("Файл заметок удалён");
			}
		});
	}
}

const [command, title, content] = process.argv.slice(2);
const manager = new NotesManager("notes.json");

switch (command) {
	case "list":
		manager.list();
		break;
	case "view":
		manager.view(title);
		break;
	case "create":
		manager.create(title, content);
		break;
	case "remove":
		manager.remove(title);
		break;
	case "deleteFile":
		manager.deleteFile();
		break;
	default:
		console.log("Неизвестная команда");
}

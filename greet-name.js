// Write a program that asks the user for their name, greets them after entering the name, and then stops its execution, saying goodbye to the user.
const { stdin, stdout } = process;
stdout.write("What is your name?\n");
stdin.on("data", (data) => {
	const dataStringified = data.toString();
	stdout.write("Hello, ");
	stdout.write(dataStringified.toUpperCase());
	process.exit();
});
process.on("exit", () => stdout.write("Goodbye!"));

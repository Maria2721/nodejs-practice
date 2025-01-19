// Write a program that asks the user for their name, returns the user-entered name in reverse, and then stops its execution.
const { stdin, stdout } = process;
stdout.write("What is your name?\n");
stdin.on("data", (data) => {
	const name = data.toString();
	const nameReverse = name.split("").reverse().join("");
	stdout.write(`Your reverse name is ${nameReverse}`);
	process.exit();
});

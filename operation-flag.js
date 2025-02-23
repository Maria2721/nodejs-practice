const { stdin, stdout, exit } = process;
const flag = process.argv[2];
const allowedFlags = ["-m", "-s"];

if (!allowedFlags.includes(flag)) {
	stdout.write("Try running the file again with the -s or -m flag");
	exit();
}

stdout.write("Enter 2 numbers:\n");

stdin.on("data", (data) => {
	const numString = data.toString();
	const numStringsArray = numString.split(" ");
	const hasIncorrectLength = numStringsArray.length !== 2;
	const hasIncorrectValues = numStringsArray.some((numStr) =>
		Number.isNaN(+numStr)
	);
	if (hasIncorrectLength || hasIncorrectValues) {
		stdout.write("You need to enter 2 numbers separated by a space");
		exit();
	}
	const [firstNum, secondNum] = numStringsArray.map((numStr) => +numStr);
	if (flag === "-s") {
		const sum = firstNum + secondNum;
		stdout.write(`${firstNum} + ${secondNum} = ${sum}`);
	} else {
		const mult = firstNum * secondNum;
		stdout.write(`${firstNum} * ${secondNum} = ${mult}`);
	}
	exit();
});

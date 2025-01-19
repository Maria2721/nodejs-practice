// Arguments
console.log(process.argv);
console.log(process.argv.slice(2));

// Flags
function getValue(flag) {
	const flagIndex = process.argv.indexOf(flag);
	return flagIndex !== -1 ? process.argv[flagIndex + 1] : null;
}
const message = getValue("-m");
console.log(message);

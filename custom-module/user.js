const user = {
	name: "Ann",
	age: 23,
	sayHi() {
		console.log(`Hi! My name is ${this.name}`);
	},
};

// works the same as module.exports.user = user;
exports.user = user;

// same as
/* module.exports = {
	name: "Ann",
	age: 23,
	sayHi() {
		console.log(`Hi! My name is ${this.name}`);
	},
}; */

/* primitive too
module.exports = 42; */

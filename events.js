// our custom class to have the EventEmitter API
/* Usually, when passing an object's method for use as an event handler, the context is lost. 
But not in this case because this inside the event handler function refers to the EventEmitter instance (in our case, the user object) */

const EventEmitter = require("events");

class User extends EventEmitter {
	constructor(name, password) {
		super();
		this.name = name;
		this.password = password;
	}

	sayHi() {
		console.log(`Hi! My name is ${this.name}`);
	}
}

const user = new User("Vasya", 12345);

user.on("greetings", user.sayHi);

user.emit("greetings"); // Hi! My name is Vasya

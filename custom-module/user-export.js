/* 
same as 
const userModuleExport = require('./user.js');
const user = userModuleExport.user;
*/
const { user } = require("./user");
user.sayHi();

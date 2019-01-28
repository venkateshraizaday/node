const os = require('os');
const fs = require('fs');
const messageModule = require('./message.js')

let message = messageModule.message

//console.log(message);
fs.appendFile("hello.txt", message, (err)=>{
	if(err) {
		console.log("Error...")
	}
})
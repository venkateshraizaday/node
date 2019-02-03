const http = require('http');
const fs = require('fs')

http.createServer((req,res) => {
	res.writeHead(200, {'Content-Type':'application/json'});
	
	const names = ["Jack", "Jill", "Hill"];
	const library = {
		name: "Poems of x",
		author: "x"
	}
	
	let json = JSON.stringify({
		names,
		library
	})
	
	res.end(json);
}).listen(8081, '127.0.0.1')

console.log('Server is running!!!')
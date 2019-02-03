const http = require('http');
const fs = require('fs')

count = 0
http.createServer((req,res) => {
	//console.log('Request#' + count);
	res.writeHead(200, {'Content-Type':'text/html'});
	let HTML = fs.readFileSync(`${__dirname}/index.html`)	
	res.end(HTML);
}).listen(8081, '127.0.0.1')
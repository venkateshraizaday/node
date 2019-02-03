const http = require('http');

count = 0
http.createServer((req,res) => {
	count += 1;
	console.log('Request#' + count);
	res.writeHead(200, {'Content-Type':'text/plain'});
	res.end('Hi, this is a response..');
}).listen(8081, '127.0.0.1')
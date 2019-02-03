const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
	if(req.url === "/"){
		res.writeHead(200, {'Content-Type':'text/html'});
		let HTML = fs.readFileSync(`${__dirname}/index.html`)
		res.end(HTML);
	} else if(req.url === "/data") {
		res.writeHead(200, {'Content-Type':'application/json'});
		
		let json = JSON.stringify({
			name:"Francis",
			lastname:"Un"
		})
		
		res.end(json);
	} else {
		res.writeHead(404);
		res.end();
	}
})

server.listen(8081, '127.0.0.1');
console.log('Server running...')
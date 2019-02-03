const express = require('express')

const app = express();

app.use("/data/css", express.static(__dirname + '/public/css'))

app.use("/", (req, res, next)=>{
	console.log(`Someone made a request from :${req.ip}`);
	res.cookie('cookie-node-example', 'cookie-node-value')
	next();
})

app.get("/data/:id", (req,res) => {
	let id = req.params.id
	res.send(`
	<html>
		<head>
			<link type="text/css" rel="stylesheet" href="css/style.css">
		</head>
		<body>
			<h1>Holla from express, user ${id}</h1>
		</body>
	</html>
	`)
})

const port = process.env.PORT || 3000
app.listen(port)
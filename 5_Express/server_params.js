const express = require('express')

const app = express();

app.get("/data/:id", (req,res) => {
	let id = req.params.id
	res.send(`
	<html>
		<body>
			<h1>Holla from express, user ${id}</h1>
		</body>
	</html>
	`)
})

// /api/data?user=venky&id=22
app.get("/api/data", (req, res)=> {
	let user = req.query.user;
	let id = req.query.id;
	
	res.send({
		user,
		id
	})
})

const port = process.env.PORT || 3000
app.listen(port)
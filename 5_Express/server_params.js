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

const port = process.env.PORT || 3000
app.listen(port)
const express = require('express')

const app = express();
app.get("/", (req,res)=>{
	res.send(`
	<html>
		<body>
			<h1>Holla from express!!!</h1>
		</body>
	</html>
	`)
})

app.get("/data", (req,res)=>{
	res.send({
		name:"Francis",
		lastname:"Ho"
	})
})

const port = process.env.PORT || 3000
app.listen(port)
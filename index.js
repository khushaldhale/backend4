const express = require("express");
const app = express();


require("dotenv").config();


app.use(express.json())


app.get("/", (req, res) => {
	return res.status(200)
		.json({
			success: true,
			message: "server is up and running"
		})
})


const dbConnect = require("./config/database");
dbConnect();


const userRoutes = require("./routes/userRoutes");
app.use("/api/v1/user", userRoutes)


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
	console.log("server is listening on PORT : ", PORT)
})
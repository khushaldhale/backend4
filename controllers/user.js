const userSchema = require("../models/user");



exports.createUser = async (req, res) => {
	const { fname, lname, age } = req.body;

	const response = await userSchema.create({ fname, lname, age });

	return res.status(200)
		.json({
			success: true,
			message: "user is created succefully",
			data: response
		})

}


exports.getAllUsers = async (req, res) => {
	const response = await userSchema.find({});

	return res.status(200)
		.json({
			success: true,
			message: "All users are fetched",
			data: response
		})

}
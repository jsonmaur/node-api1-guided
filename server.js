const express = require("express")
const db = require("./database")

const server = express()

// required to parse incoming JSON request data
server.use(express.json())

server.get("/", (req, res) => {
	res.json({ message: "Hello, World" })
})

server.get("/users", (req, res) => {
	const users = db.getUsers()
	res.json(users)
})

server.get("/users/:id", (req, res) => {
	const user = db.getUserById(req.params.id)

	if (user) {
		res.json(user)
	} else {
		res.status(404).json({
			message: "user not found",
		})
	}
})

server.post("/users", (req, res) => {
	const newUser = db.createUser({
		name: req.body.name,
	})

	res.json(newUser)
})

server.put("/users/:id", (req, res) => {
	const user = db.getUserById(req.params.id)

	if (user) {
		const updatedUser = db.updateUser(user.id, {
			// use a fallback value so we don't accidentally set it to empty
			name: req.body.name || user.name,
		})

		res.json(updatedUser)
	} else {
		res.status(404).json({
			message: "user not found",
		})
	}
})

server.delete("/users/:id", (req, res) => {
	const user = db.getUserById(req.params.id)

	if (user) {
		db.deleteUser(user.id)
		
		// a successful but empty response
		res.status(204).end()
	} else {
		res.status(404).json({
			message: "user not found",
		})
	}
})

module.exports = server

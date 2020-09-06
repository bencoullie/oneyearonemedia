const { fakeUsers } = module.require("./fixtures")
const db = require('./queries')
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

// Definitions
const app = express()
const port = process.env.PORT || 5001

// Configuration
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.listen(port, () => console.log(`Listening on port ${port}`))

// Endpoints
app.get("/api/getUsers", (req, res) => res.send(fakeUsers))
app.get('/users', db.getPerson)
app.get('/users/:id', db.getPersonById)
app.post('/users', db.createPerson)
app.put('/users/:id', db.updatePerson)
app.delete('/users/:id', db.deletePerson)

const { fakeUsers } = module.require("./fixtures")

const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express()
const port = process.env.PORT || 5001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

app.get("/api/getUsers", (req, res) => {
  res.send(fakeUsers)

  // error example
  // res.status(400).json("shits on fire yo")
})

app.post("/api/world", (req, res) => {
  console.log(req.body)
  res.send(`I received your POST request. This is what you sent me: ${req.body.post}`)
})

app.listen(port, () => console.log(`Listening on port ${port}`))

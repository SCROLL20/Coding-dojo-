const express = require("express")
const app = express()

//* DataBase Connnection
require('dotenv').config()
require('./config/mongoose.config')

//* PORT
const port = process.env.PORT

//* Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//* Import Routes Files inside Server
const AllMyJokesRoutes = require("./routes/jokes.route")
AllMyJokesRoutes(app)

//* Running the Server
app.listen(port, ()=> {
    console.log('Listening on port ${port}')
})

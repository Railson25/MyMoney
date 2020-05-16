
require('dotenv/config')

const express = require('express')
const server = express()
const  cors = require('cors')

server.use(express.urlencoded({ extended: true }))
server.use(express.json())
server.use(cors())

server.listen(process.env.PORT, function() {
    console.log(`BACKEND is running on port ${process.env.PORT}`)
})

module.exports = server
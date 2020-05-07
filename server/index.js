const express = require('express')
const socketio = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const PORT = process.env.PORT || 80

const router = require('./router')

app.use(router)

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

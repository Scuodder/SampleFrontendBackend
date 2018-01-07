const express = require('express')
const http = require('http')
const socketio = require('socket.io')


const app = express()
const server = http.createServer(app)
const io  = socketio(server)

const PORT = process.env.PORT || 2323;

io.on('connection', function (socket) {
    console.log("Socket created at : " + socket.id)
    socket.on('play', function (data) {
        socket.broadcast.emit('play', data)
    })
})


app.use('/', express.static(__dirname + '/public'))

server.listen(PORT , () => {
    console.log(`Server started at http://localhost:${PORT}`)
})
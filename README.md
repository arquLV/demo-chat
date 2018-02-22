# Chat demo

Built with **React**, **Redux** and **Socket.io**, using **Styled Components**.

Uses a minimal backend:
```javascript
const http = require('http')
const socketIO = require('socket.io')

const PORT = 8000

const chatServer = http.createServer()
chatServer.listen(PORT)

const io = socketIO(chatServer)
io.on('connection', socket => {
    console.log(`Connected ${socket.id}`)

    socket.emit('action', {
        type: 'RECEIVE/CONNECTED',
        id: socket.id
    })

    socket.on('action', action => {
        if (action.type === 'SEND/MESSAGE') {
            socket.broadcast.emit('action', {
                type: 'RECEIVE/MESSAGE',
                author: socket.id,
                color: action.color,
                text: action.text
            })
        }
    })
})
```

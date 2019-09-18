// io needs to use HTTP, express will still be the middleware for routes
const express = require('express');
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const port = process.env.PORT || 3000;
// http server listening on port
server.listen(port, function(){
    console.log('listening on *:3000');
  });

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.use(express.static('public'))


// http server listening on port


//   functions for successful connection 
// function successfulConnection() {
//     socket.emit('chat-message', 'Hello Welcome to the Chat My Guy!')
// }

// calls function on load
// http server object named io is listening to connection events then running the function 
io.on('connection', socket => {
    socket.emit('chat-message', 'Hello Welcome to the Chat My Guy!')});
  


  


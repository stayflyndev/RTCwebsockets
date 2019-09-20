// io needs to use HTTP, express will still be the middleware for routes
const express =require ('express')
const app = require('express')(); //creates the express app
const http = require('http').createServer(app); //app is an http server
const io = require('socket.io')(http);

const port = process.env.PORT || 3000;

// http server listening on port
http.listen(port, function(){
    console.log('listening on *:3000');
  });

  app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
    // socekt is creating an event, then sends the data to the client
    socket.emit('chat-message', 'Hello, Welcome')

})


// http server listening on port


//   functions for successful connection 
// function successfulConnection() {
//     socket.emit('chat-message', 'Hello Welcome to the Chat My Guy!')
// }

// calls function on load
// http server object named io is listening to connection events then running the function 

  


  


// io needs to use HTTP, express will still be the middleware for routes
const express =require ('express')
const app = express(); //creates the express app
const httpserver = require('http').createServer(app); //app is an http server
const io = require('socket.io')(httpserver);

const port = process.env.PORT || 3000;

// http server listening on port
httpserver.listen(port, function(){
    console.log('listening on *:3000');
  });

  app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket)=>{
    // callback function after connection is made to the client

    // recieves a chat event, then sends the data to other sockets
    socket.on('chat', (data)=>{
        io.sockets.emit('chat', data)
    });

});


// http server listening on port


//   functions for successful connection 
// function successfulConnection() {
//     socket.emit('chat-message', 'Hello Welcome to the Chat My Guy!')
// }

// calls function on load
// http server object named io is listening to connection events then running the function 

  


  


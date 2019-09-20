const socket = io('http://localhost:3000'); //location of where server is hosting socket app

socket.on('chat-message', data =>{
    console.log(data)
});

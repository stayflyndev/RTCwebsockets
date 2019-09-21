const socket = io('http://localhost:3000'); //location of where server is hosting socket app

socket.on('chat-message', data =>{
    console.log(data)
});

// query DOM
const message = document.getElementById('message');
      handle = document.getElementById('handle');
      button =  document.getElementById('submit');
      output = document.getElementById('output');


// Emit events

button.addEventListener('click', () =>
{
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    })
}) 

// Listen to events

socket.on('chat', (data)=>{
    output.innerHTML += '<p> <strong>' + data.handle + ': </strong>' + data.message + '</p>'
})
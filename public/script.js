// client side javascript

const socket = io('http://localhost:3000')

socket.on('chat-message', (data) => {
 console.log("chat message")
})
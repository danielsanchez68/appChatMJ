console.log('App Chat WebSocket Client')

const socket = io.connect()

socket.on('mensajes', mensajes => {
    console.log(mensajes)
    render(mensajes)
})

function render(mensajes) {
    const html = mensajes.map( mensaje => `
        <div>
            <strong>${mensaje.author}</strong>
            <em>${mensaje.text}</em>
        </div>
    `).join(' ')

    document.getElementById('mensajes').innerHTML = html
}

function addMensaje(e) {
    e.preventDefault()

    const mensaje = {
        author: document.getElementById('username').value, 
        text: document.getElementById('texto').value
    }
    socket.emit('nuevo-mensaje', mensaje)
}

document.querySelector('form').addEventListener('submit', addMensaje)

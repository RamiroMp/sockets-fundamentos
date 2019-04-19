var socket = io();

// On es para escuchar sucesos 
// detectamos la conexion con el servidor
socket.on('connect', function() {
        console.log('conectado al servidor');
    })
    // detectamos si el servidor se ha desconectado
socket.on('disconnect', function() {
    console.log('perdida conexion con el servidor');
});


// Emit es para enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});

// Escuchar informacion con On
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})
const { io } = require('../server');

//on es para escuchar
// Emit es para enviar

io.on('connection', (client) => {
    console.log('Usuario Conectado');


    //Enviar Informacion

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta app'
    });

    client.on('disconnect', () => {

        console.log('usuario desconectado');
    });

    // escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*if (mensaje.usuario) {
            callback({ resp: 'Todo salio bien' });
        } else {
            callback({ resp: 'Todo salido mal' });
        }*/


    });


});
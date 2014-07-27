'use strict';

var controller = require('../controllers/socket.io');

module.exports = function(io) {
    io.use(function() {

    });

    io.on('connection', function(socket) {
        console.log('Socket Connect: '+socket.id);

        socket.on('message', function(message, callback) {
            console.log('io message ' + message);
        });

        socket.on('anything', function(data) {
            console.log('io anything');
        });

        socket.on('disconnect', function() {
            console.log('io disconnect');
        });

        controller.tutorial(socket);
    });
}
'use strict';

exports.tutorial = function(socket) {
    socket.emit('new:msg', 'Welcome tutorial!?');

    socket.on('broadcast:msg', function(data) {
        // 새 메시지에 관해 자신을 제외한 나머지 모든 클라이언트에 전달
        socket.broadcast.emit('new:msg', data.message);
    });
};
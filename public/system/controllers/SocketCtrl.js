'use strict';

define(['controllers/_controllers'], function(controllers) {
    controllers.controller('SocketCtrl', ['$scope', 'Socket',
        function($scope, Socket) {
            $scope.message = '';
            $scope.messages = [];
            
            // 새 msg 이벤트가 서버에서 발생하면
            Socket.on('new:msg', function(message) {
                $scope.messages.push(message);
            });

            // 새 메시지가 있음을 서버에 알림
            $scope.broadcast = function() {
                Socket.emit('broadcast:msg', {
                    message: $scope.message
                });

                $scope.messages.push($scope.message);
                $scope.message = '';
            }
        }
    ]);
});
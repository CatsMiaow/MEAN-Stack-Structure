'use strict';

define(['controllers/_controllers', 'services/MessagesSvc'], function(controllers) {
    controllers.controller('MailListCtrl', ['$scope', 'Messages',
        function($scope, Messages) {
            $scope.messages = Messages.query();
        }
    ]);

    controllers.controller('MailDetailCtrl', ['$scope', '$routeParams', 'Messages',
        function($scope, $routeParams, Messages) {
            $scope.message = Messages.get($routeParams.id);
        }
    ]);
});

'use strict';

define(['controllers/_controllers'], function(controllers) {
    controllers.controller('ErrorClassCtrl', ['$scope',
        function($scope) {
            $scope.isError = false;
            $scope.isWarning = false;

            $scope.showError = function() {
                $scope.messageText = '에러입니다!';
                $scope.isError = true;
                $scope.isWarning = false;
            };

            $scope.showWarning = function() {
                $scope.messageText = '경고에 불과합니다. 계속 진행하세요!';
                $scope.isWarning = true;
                $scope.isError = false;
            };
        }
    ]);
});

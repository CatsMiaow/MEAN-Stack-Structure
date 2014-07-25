'use strict';

define(['controllers/_controllers'], function(controllers) {
    controllers.controller('StartUpCtrl', ['$scope',
        function($scope) {
            // ng-change
            $scope.computeNeeded = function() {
                $scope.needed = $scope.startingEstimate * 10;
            };

            // ng-submit
            $scope.requestFunding = function() {
                alert('안됐지만 고객부터 더 모으세요.');
            };

            // ng-click
            $scope.reset = function() {
                $scope.startingEstimate = 0;
            };
        }
    ]);
});

'use strict';

define(['controllers/_controllers'], function(controllers) {
    controllers.controller('ClickClassCtrl', ['$scope',
        function($scope) {
            $scope.directory = [
                { name: '푸짐푸짐 암소구이',          cuisine: '바비큐' },
                { name: '미스터 그린의 청정 샐러드', cuisine: '샐러드' },
                { name: '파인 피시 하우스',          cuisine: '해산물' }
            ];

            $scope.selectRestaurant = function(row) {
                $scope.selectedRow = row;
            };
        }
    ]);
});

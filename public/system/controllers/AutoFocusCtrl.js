'use strict';

define(['controllers/_controllers', 'directives/focusDrtv'], function(controllers) {
    controllers.controller('AutoFocusCtrl', ['$scope',
        function($scope) {

            $scope.message = {
                text: '아무것도 클릭되지 않음'
            };

            $scope.clickUnfocused = function() {
                $scope.message.text = '포커스 없는 버튼 클릭됨';
            };

            $scope.clickFocused = function() {
                $scope.message.text = '포커스 있는 버튼 클릭됨';
            };
        }
    ]);
});

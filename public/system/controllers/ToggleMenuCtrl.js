'use strict';

define(['controllers/_controllers'], function(controllers) {
	controllers.controller('ToggleMenuCtrl', ['$scope',
		function($scope) {
			$scope.showMenu = false;
			$scope.toggleMenu = function() {
				$scope.showMenu = !$scope.showMenu;
			};

			$scope.isDisabled = false;
			$scope.stun = function() {
				$scope.isDisabled = true;
			};
		}
	]);
});

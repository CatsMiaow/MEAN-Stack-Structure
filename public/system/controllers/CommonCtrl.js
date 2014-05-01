'use strict';

define(['controllers/_controllers'], function(controllers) {
	controllers.controller('CommonCtrl', ['$scope', 'ErrorService',
		function($scope, ErrorService) {
			$scope.errorService = ErrorService;

            $scope.$on('event:loginRequired', function() {
                $location.path('/login');
            });
		}
	]);
});

'use strict';

define(['controllers/_controllers', 'filters/titleCaseFit'], function(controllers) {
	controllers.controller('TitleCaseCtrl', ['$scope',
		function($scope) {
			// titleCase filter
			$scope.pageHeading = 'behold the majesty of your page title';
		}
	]);
});

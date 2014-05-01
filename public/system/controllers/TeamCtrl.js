'use strict';

define(['controllers/_controllers', 'services/TeamSvc'], function(controllers) {
	
	controllers.controller('TeamCtrl', ['$scope',
		function($scope) {
			// 1. 리피터( repeater )를 활용해 필터( filter )를 깔끔하고 간단하게 사용하는 방법
			// 2. 상속 관계를 공유하지 않는 컨트롤러 간에 통신하는 방법
		}
	]);

	controllers.controller('TeamListCtrl', ['$scope', 'TeamFilter',
		function($scope, TeamFilter) {

			$scope.filterService = TeamFilter;
			$scope.teamsList = [{
				id      : 1,
				name    : 'Dallas Mavericks',
				sport   : 'Basketball',
				city    : 'Dallas',
				featured: true
			}, {
				id      : 2,
				name    : 'Dallas Cowboys',
				sport   : 'Football',
				city    : 'Dallas',
				featured: false
			}, {
				id      : 3,
				name    : 'New York Knicks',
				sport   : 'Basketball',
				city    : 'New York',
				featured: false
			}, {
				id      : 4,
				name    : 'Brooklyn Nets',
				sport   : 'Basketball',
				city    : 'New York',
				featured: false
			}, {
				id      : 5,
				name    : 'New York Jets',
				sport   : 'Football',
				city    : 'New York',
				featured: false
			}, {
				id      : 6,
				name    : 'New York Giants',
				sport   : 'Football',
				city    : 'New York',
				featured: true
			}, {
				id      : 7,
				name    : 'Los Angeles Lakers',
				sport   : 'Basketball',
				city    : 'Los Angeles',
				featured: true
			}, {
				id      : 8,
				name    : 'Los Angeles Clippers',
				sport   : 'Basketball',
				city    : 'Los Angeles',
				featured: false
			}, {
				id      : 9,
				name    : 'Dallas Stars',
				sport   : 'Hockey',
				city    : 'Dallas',
				featured: false
			}, {
				id      : 10,
				name    : 'Boston Bruins',
				sport   : 'Hockey',
				city    : 'Boston',
				featured: true
			}];
		}
	]);

	controllers.controller('TeamFilterCtrl', ['$scope', 'TeamFilter',
		function($scope, TeamFilter) {
			$scope.filterService = TeamFilter;
		}
	]);
});

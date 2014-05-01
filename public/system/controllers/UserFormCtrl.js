'use strict';

define(['controllers/_controllers'], function(controllers) {
	controllers.controller('UserFormCtrl', ['$scope',
		function($scope) {
			$scope.message = '';

			$scope.addUser = function() {
				// 가입된 사용자를 데이터베이스에 실제로 저장하는 코드를
				// 여기에 스스로 작성해보자.
				$scope.message = '감사합니다, '+$scope.user.first+'님. 가입을 축하립드니다!';
			};
		}
	]);
});

'use strict';

define(['controllers/_controllers', 'directives/jQueryDrtv', 'fileUpload'], function(controllers) {
	controllers.controller('JqueryCtrl', ['$scope',
		function($scope) {
			$scope.myText = '선택되지 않음';
			$scope.currentDate = '';
			$scope.updateMyText = function(date) {
				$scope.myText = '선택됨';
			};

			$scope.images = [];
			$scope.uploadText = '업로드할 이미지를 선택하세요.';
			$scope.uploadFinished = function(e, data) {
				if (data.result.error) {
					$scope.uploadText = data.result.error;
					return false;
				}

				$scope.images.push(data.result.file);
				$scope.uploadText = '이미지가 업로드되었습니다.';
			};
		}
	]);
});
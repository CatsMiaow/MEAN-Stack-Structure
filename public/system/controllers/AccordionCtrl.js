'use strict';

define(['controllers/_controllers', 'directives/accordionDrtv'], function(controllers) {
	controllers.controller('AccordionCtrl', ['$scope',
		function($scope) {
			$scope.expanders = [{
				title: '펼치려면 클릭해',
				text : '반가워, 나는 감춰져 있다가 지금 나타난 내용이야'
			}, {
				title: '나를 클릭하렴',
				text : '앞서 본 것보단 내가 한층 우월한 텍스트란다'
			}, {
				title: '안돼, 나를 클릭해!',
				text : '나는 다른 어느 텍스트보다 먼저 봐야만 하는 중대한 텍스트라구'
			}];
		}
	]);
});

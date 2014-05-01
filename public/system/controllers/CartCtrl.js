'use strict';

define(['controllers/_controllers', 'services/ItemsSvc'], function(controllers) {
	controllers.controller('CartCtrl', ['$scope', 'Items',
		function($scope, Items) {
			$scope.bill = {};

			/*
				1) Items.query().success(function(data) {
					   $scope.items = data;
				   });
				2) Items.query().then(function(data) {
					   $scope.items = data;
				   });
			*/

			Items.query(function(data) {
				$scope.items = data;
			});

			$scope.remove = function(index) {
				$scope.items.splice(index, 1);
			};

			$scope.$watch(function() {
				var total = 0;
				for (var i in $scope.items) {
					total = total + $scope.items[i].price * $scope.items[i].quantity;
				}

				$scope.bill.totalCart = total;
				$scope.bill.discount = total > 100 ? 10 : 0;
				$scope.bill.subtotal = total - $scope.bill.discount;
			});
		}
	]);
});
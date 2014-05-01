'use strict';

define(['services/_services'], function(services) {
	services.factory('Items', ['$http', function($http) {
		var items = {};

		items.query = function(callback) {
			return callback([
				{id:1, title:'페인트 그릇', quantity:8, price:3.95},
				{id:2, title:'땡땡이 리본', quantity:17, price:12.95},
				{id:3, title:'공깃돌', quantity:5, price:6.95}
			]);

			/*
				1) return $http.get(rtPath+'angularjs/api/products');
				2) return $http.get(rtPath+'angularjs/api/products').then(function(result) {
					   return result.data;
				   });
			*/
			// $http.get('angularjs/api/products').success(callback);
		};

		return items;
	}]);
});

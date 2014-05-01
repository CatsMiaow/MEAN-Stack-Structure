'use strict';

define(['directives/_directives'], function(directives) {
	directives.directive('focus', function() {
		return {
			link: function(scope, element, attrs, controller) {
				element[0].focus();
			}
		};
	});
});

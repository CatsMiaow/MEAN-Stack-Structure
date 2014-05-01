'use strict';

define([
	'angular',
	'angularRoute',
	'angularSanitize',
	'angularCookies',
	'controllers/_controllers',
	'services/_services',
	'filters/_filters',
	'directives/_directives'
], function(angular) {
	return angular.module('meanApp', [
		'ngRoute',
		'ngSanitize',
		'ngCookies',
		'controllers',
		'services',
		'filters',
		'directives'
	]);
});
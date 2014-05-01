'use strict';

define(['directives/_directives'], function(directives) {

    directives.directive('loadingBar', ['$rootScope',
        function($rootScope) {
            return {
                link: function(scope, element, attrs) {
                    element.addClass('hide');

                    $rootScope.$on('$routeChangeStart', function() {
                        element.removeClass('hide');
                    });
                    
                    $rootScope.$on('$routeChangeSuccess', function() {
                        element.addClass('hide');
                    });
                }
            }
        }
    ]);

    directives.directive('errorBar', ['$parse',
        function($parse) {
            return {
                restrict: 'A', // ex) <div error-bar message="errorService.errorMessage"></div>
                template: '<div class="alert alert-danger alert-dismissable error-bar" ng-show="errorMessage">'
                    + '<button type="button" ng-click="hideError()" class="close" aria-hidden="true">&times;</button>'
                    + '{{errorMessage}}</div>',

                link: function(scope, element, attrs) {
                    var errorMessageAttr = attrs['message']; // 대문자 안됨
                    scope.errorMessage = null;

                    scope.$watch(errorMessageAttr, function(newVal) {
                        scope.errorMessage = newVal;
                    });

                    scope.hideError = function() {
                        scope.errorMessage = null;

                        // scope에서 errorMessageAttr 값의 변수를 찾아서 null 적용
                        $parse(errorMessageAttr).assign(scope, null);
                    };
                }
            };
        }
    ]);
});
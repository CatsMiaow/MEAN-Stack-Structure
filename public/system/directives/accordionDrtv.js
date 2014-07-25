'use strict';

define(['directives/_directives'], function(directives) {

    directives.directive('expander', function() {
        return {
            restrict   : 'EA',
            replace    : true,
            transclude : true,
            require       : '^?accordion',
            scope      : { title: '=expander' }, // @expanderTitle
            templateUrl: 'templateExpander',
            /*template: '<div>'
                + '<div class="title" ng-click="toggle()">{{title}}</div>'
                + '<div class="body" ng-show="showMe" ng-transclude></div>'
                +'</div>',*/
            link: function(scope, element, attrs, accordion) {
                scope.showMe = false;
                accordion.addExpander(scope);

                scope.toggle = function toggle() {
                    scope.showMe = !scope.showMe;
                    accordion.gotOpened(scope);
                }
            }
        };
    });

    directives.directive('accordion', function() {
        return {
            restrict  : 'EA',
            replace   : true,
            transclude: true,
            template  : '<div ng-transclude></div>',
            controller: function() {
                var expanders = [];

                this.gotOpened = function(selectedExpander) {
                    angular.forEach(expanders, function(expander) {
                        if (selectedExpander != expander) {
                            expander.showMe = false;
                        }
                    });
                }

                this.addExpander = function(expander) {
                    expanders.push(expander);
                }
            }
        }
    });
});

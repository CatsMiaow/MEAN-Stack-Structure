'use strict';

var isIE8 = /MSIE [5-8]/.test(navigator.userAgent);


require.config({
    baseUrl: '/system',
    paths: {
        angular        : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min',
        angularRoute   : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-route.min',
        angularResource: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-resource.min',
        angularSanitize: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-sanitize.min',
        angularCookies : '//ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular-cookies.min',
        domReady        : '../vendor/domReady',
        bootstrap        : '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min',
        jQuery             : '//ajax.googleapis.com/ajax/libs/jquery/'+(isIE8 ? '1.11.0' : '2.1.0')+'/jquery.min',
        jQueryUI        : '//ajax.googleapis.com/ajax/libs/jqueryui/1.10.4/jquery-ui.min',
        fileUpload       : '../vendor/jquery.fileupload',
        NProgress        : '../vendor/nprogress',
        SocketIO        : '/socket.io/socket.io'
    },
    shim: {
        angular        : { deps: ['SocketIO', 'jQueryUI'], exports: 'angular' },
        angularRoute   : ['angular'],
        angularResource: ['angular'],
        angularSanitize: ['angular'],
        angularCookies : ['angular'],
        bootstrap        : isIE8 ? ['jQuery', '../vendor/html5shiv', '../vendor/respond'] : ['jQuery'],
        jQueryUI        : ['jQuery'],
        SocketIO        : { exports: 'io' }
    }
});


require([
    'NProgress'
], function(NProgress) {
    NProgress.start();

    require([
        'angular',
        'app',
        'domReady',
        'bootstrap',

        'services/CommonSvc',
        'directives/commonDrtv',
        'controllers/CommonCtrl',

        'controllers/HelloCtrl',
        'controllers/CartCtrl',
        'controllers/StartUpCtrl',
        'controllers/StudentListCtrl',
        'controllers/ToggleMenuCtrl',
        'controllers/ErrorClassCtrl',
        'controllers/ClickClassCtrl',
        'controllers/TitleCaseCtrl',
        'controllers/A-MailCtrl',
        'controllers/AutoFocusCtrl',
        'controllers/UserFormCtrl',
        'controllers/RecipeCtrl',
        'controllers/AccordionCtrl',
        'controllers/JqueryCtrl',
        'controllers/TeamCtrl',
        'controllers/SocketCtrl'
    ], function(angular, app, domReady) {
        app.config(['$routeProvider',
            function($routeProvider) {
                $routeProvider
                    .when('/', {
                        controller: 'HelloCtrl',
                        templateUrl: 'views/tutorial/hello'
                    }).when('/cart', {
                        controller: 'CartCtrl',
                        templateUrl: 'views/tutorial/cart'
                    }).when('/startUp', {
                        controller: 'StartUpCtrl',
                        templateUrl: 'views/tutorial/startUp'
                    }).when('/studentList', {
                        controller: 'StudentListCtrl',
                        templateUrl: 'views/tutorial/studentList'
                    }).when('/toggleMenu', {
                        controller: 'ToggleMenuCtrl',
                        templateUrl: 'views/tutorial/toggleMenu'
                    }).when('/errorClass', {
                        controller: 'ErrorClassCtrl',
                        templateUrl: 'views/tutorial/errorClass'
                    }).when('/clickClass', {
                        controller: 'ClickClassCtrl',
                        templateUrl: 'views/tutorial/clickClass'
                    }).when('/titleCase', {
                        controller: 'TitleCaseCtrl',
                        templateUrl: 'views/tutorial/titleCase'
                    }).when('/aMail', {
                        controller: 'MailListCtrl',
                        templateUrl: 'views/tutorial/aMailList'
                    }).when('/aMail/:id', {
                        controller: 'MailDetailCtrl',
                        templateUrl: 'views/tutorial/aMailDetail'
                    }).when('/autoFocus', {
                        controller: 'AutoFocusCtrl',
                        templateUrl: 'views/tutorial/autoFocus'
                    }).when('/userForm', {
                        controller: 'UserFormCtrl',
                        templateUrl: 'views/tutorial/userForm'
                    }).when('/recipe', {
                        controller: 'RecipeListCtrl',
                        templateUrl: 'views/tutorial/recipeList',
                        resolve: {
                            recipe: ['Recipe', function(Recipe) {
                                return Recipe.list({count:true});
                            }
                        ]}
                    }).when('/recipe/edit/:recipeId', {
                        controller: 'RecipeEditCtrl',
                        templateUrl: 'views/tutorial/recipeForm',
                        resolve: {
                            recipe: ['Recipe', function(Recipe) {
                                return Recipe.get();
                            }
                        ]}
                    }).when('/recipe/view/:recipeId', {
                        controller: 'RecipeViewCtrl',
                        templateUrl: 'views/tutorial/recipeView',
                        resolve: {
                            recipe: ['Recipe', function(Recipe) {
                                return Recipe.get();
                            }
                        ]}
                    }).when('/recipe/new', {
                        controller: 'RecipeNewCtrl',
                        templateUrl: 'views/tutorial/recipeForm'
                    }).when('/accordion', {
                        controller: 'AccordionCtrl',
                        templateUrl: 'views/tutorial/accordion'
                    }).when('/jQuery', {
                        controller: 'JqueryCtrl',
                        templateUrl: 'views/tutorial/jQuery'
                    }).when('/team', {
                        controller: 'TeamCtrl',
                        templateUrl: 'views/tutorial/team'
                    }).when('/socket', {
                        controller: 'SocketCtrl',
                        templateUrl: 'views/tutorial/socket'
                    }).when('/error', {
                        templateUrl: 'views/tutorial/error'
                    }).otherwise({
                        redirectTo:'error'
                    });
            }
        ]);

        app.run(['Socket',
            function(Socket) {
                Socket.on('connect', function() {
                    console.log('Socket Connect');
                });

                Socket.on('reconnect', function() {
                    console.log('Reconnected to the server');
                });

                Socket.on('reconnecting', function() {
                    console.log('Attempting to re-connect to the server');
                });

                Socket.on('error', function(e) {
                    console.log('A unknown error occurred ' + e);
                });

                angular.element('#container').removeClass('hide');
                NProgress.done();
            }
        ]);

        domReady(function() {
            angular.bootstrap(document, ['meanApp']);
        });
    });
});
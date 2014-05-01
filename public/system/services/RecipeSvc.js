'use strict';

define(['services/_services'], function(services) {

    services.factory('Recipe', ['Resource', '$route', '$q',
        function(Resource, $route, $q) {
            var recipe = {};

            recipe.conn = Resource('recipe/:recipeId', { recipeId: '@recipeId' });

            recipe.list = function(param) {
                var delay = $q.defer();

                var config = {
                    count : false,
                    limit : 3,
                    page  : 1,
                    search: {}
                };

                angular.extend(config, param);

                // offset 계산
                config.offset = (config.page - 1) * config.limit;

                recipe.conn.query(config, function(recipes) {
                    delay.resolve(recipes);
                }, function() {
                    delay.reject('Unable to fetch recipes');
                });

                return delay.promise;
            }

            recipe.get = function() {
                var delay = $q.defer();

                recipe.conn.get({
                    recipeId: $route.current.params.recipeId
                }, function(recipe) {
                    delay.resolve(recipe);
                }, function() {
                    delay.reject('Unable to fetch recipe ' + $route.current.params.recipeId);
                });

                return delay.promise;
            }

            /*recipe.insert = function(scopeData, callback) {
                Authentication.getAccessToken().success(function(res) {
                    scopeData.$save({token:res.token}, function(data) {
                        callback(data);
                    });
                });
            }

            recipe.update = function(scopeData, callback) {
                Authentication.getAccessToken().success(function(res) {
                    scopeData.$update({token:res.token}, function(data) {
                        callback(data);
                    });
                });
            }

            recipe.del = function(scopeData, callback) {
                Authentication.getAccessToken().success(function(res) {
                    scopeData.$delete({token:res.token}, function(data) {
                        callback(data);
                    });
                });
            }*/

            return recipe;
        }
    ]);
});

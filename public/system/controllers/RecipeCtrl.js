'use strict';

define(['controllers/_controllers', 'services/RecipeSvc', 'directives/paginationDrtv'], function(controllers) {

    controllers.controller('RecipeListCtrl', ['$scope', 'Recipe', 'recipe',
        function($scope, Recipe, recipe) {
            $scope.recipes = recipe.list;

            $scope.totalItems = $scope.orderNo = recipe.count;
            $scope.currentPage = 1;
            $scope.itemsPerPage = recipe.limit;

            $scope.setPage = function(pageNo) {
                $scope.currentPage = pageNo;
            };

            $scope.pageChanged = function() {
                Recipe.list({
                    page: $scope.currentPage
                }).then(function(data) {
                    $scope.recipes = data.list;
                });

                $scope.orderNo = recipe.count - ($scope.currentPage - 1) * recipe.limit;
                console.log('Page changed to: ' + $scope.currentPage);
            };

            $scope.maxSize = 5;
            $scope.bigTotalItems = 175;
            $scope.bigCurrentPage = 1;
        }
    ]);

    controllers.controller('RecipeViewCtrl', ['$scope', '$location', 'recipe',
        function($scope, $location, recipe) {
            $scope.recipe = recipe;

            $scope.edit = function() {
                $location.path('/recipe/edit/' + recipe._id);
            };
        }
    ]);

    controllers.controller('RecipeEditCtrl', ['$scope', '$location', 'recipe',
        function($scope, $location, recipe) {
            $scope.recipe = recipe;
            $scope.recipe.recipeId = recipe._id;

            $scope.save = function() {
                $scope.recipe.$update(function(data) {
                    alert(data._id);

                    $location.path('/recipe/view/' + data._id);
                });
            }

            $scope.remove = function() {
                $scope.recipe.$delete(function(data) {
                    alert(data._id);

                    delete $scope.recipe;
                    $location.path('/recipe');
                });
            }
        }
    ]);

    controllers.controller('RecipeNewCtrl', ['$scope', '$location', 'Recipe',
        function($scope, $location, Recipe) {
            $scope.recipe = new Recipe.conn({
                ingredients: [ {} ]
            });

            $scope.save = function() {
                $scope.recipe.$save(function(data) {
                    alert(data._id);

                    // $location.path('/recipe/view/' + recipe.id);
                    $location.path('/recipe');
                });
            }
        }
    ]);

    controllers.controller('RecipeIngredientsCtrl', ['$scope',
        function($scope) {
            $scope.addIngredient = function() {
                var ingredients = $scope.recipe.ingredients;
                ingredients[ingredients.length] = {};
            };

            $scope.removeIngredient = function(index) {
                $scope.recipe.ingredients.splice(index, 1);
            };
        }
    ]);

});
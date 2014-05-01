'use strict';

var recipe = require('../controllers/recipe');

module.exports = function(router) {
    router.get('/api/recipe', recipe.list);
    router.post('/api/recipe', recipe.new);
    router.get('/api/recipe/:recipeId', recipe.view);
    router.put('/api/recipe/:recipeId', recipe.edit);
    router.delete('/api/recipe/:recipeId', recipe.del);

    // :recipeId 값이 있을 때 recipe.load 컨트롤러를 탄다.
    router.param('recipeId', recipe.load);
};
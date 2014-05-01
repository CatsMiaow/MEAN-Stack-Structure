'use strict';

var mongoose = require('mongoose')
  , async  = require('async')
  , _      = require('underscore')
  , Recipe = mongoose.model('Recipe');

exports.load = function(req, res, next, id) {
    Recipe.load(id, function(err, recipe) {
        if (err) return next(err);
        if (!recipe) return next(new Error('Failed to load recipe ' + id));
        req.recipe = recipe;
        next();
    });

    console.log('Recipe Load');
};

exports.list = function(req, res) {
    async.parallel([
        function(callback) {
            if (!req.query.count) {
                callback(null, false);
            }

            Recipe.count(req.query.search, function(err, count) {
                if (err) {
                    res.send(500);
                } else {
                    callback(null, count);
                }
            });

            console.log('Recipe Count');
        },
        function(callback) {
            Recipe.find(req.query.search)
                .skip(req.query.offset).limit(req.query.limit)
                .sort('-created').exec(function(err, recipes) {
                    if (err) {
                        res.send(500);
                    } else {
                        callback(null, recipes);
                    }
                });

            console.log('Recipe List');
        }
    ], function(err, result) {
        res.json({
            'count': result[0],
            'list' : result[1],
            'limit': req.query.limit
        });
    });
};

exports.new = function(req, res) {
    var recipe = new Recipe(req.body);
    // recipe.user = req.user;

    recipe.save(function(err) {
        if (err) {
            return res.send('error', {
                errors: err.errors,
                recipe: recipe
            });
        } else {
            res.json(recipe);
        }
    });

    console.log('Recipe New');
};

exports.view = function(req, res) {
    res.json(req.recipe);
    
    console.log('Recipe View');
};

exports.edit = function(req, res) {
    var recipe = _.extend(req.recipe, req.body);

    recipe.save(function(err) {
        if (err) {
            return res.send('error', {
                errors: err.errors,
                recipe: recipe
            });
        } else {
            res.json(recipe);
        }
    });

    console.log('Recipe Edit');
};

exports.del = function(req, res) {
    var recipe = req.recipe;

    recipe.remove(function(err) {
        if (err) {
            return res.send('error', {
                errors: err.errors,
                recipe: recipe
            });
        } else {
            res.json(recipe);
        }
    });

    console.log('Recipe Del');
};
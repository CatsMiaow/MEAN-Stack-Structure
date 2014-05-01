'use strict';

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

// 스키마 구조
var RecipeSchema = new Schema({
    title: { type: String, required: true, trim: true },
    description: String,
    instructions: String,
    ingredients: [{
        amount: Number,
        amountUnits: String,
        ingredientName: String
    }],
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

// 후킹
RecipeSchema.pre('save', function(next) {
    if (this.isNew) {
        console.log('isNew!?');
    }
    else {
        this.updated = new Date();
    }

    next();
});

// 자주쓰는 Model
RecipeSchema.static({
    load: function(id, callback) {
        this.findOne({ _id: id }, callback);
    }
});


mongoose.model('Recipe', RecipeSchema);
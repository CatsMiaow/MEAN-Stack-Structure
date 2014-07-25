'use strict';

var upload = require('../controllers/upload');

module.exports = function(router) {
    router.post('/upload/image', upload.image);
};

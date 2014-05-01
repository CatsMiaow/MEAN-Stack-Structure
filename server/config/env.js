'use strict';

var _ = require('underscore');

// 공통설정
var config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 8080
}

// 개발환경설정
var environment = {
    development: {
        db: {
            uri: 'mongodb://localhost:27017/meanDev',
            user: '',
            password: ''
        }
    },
    production: {
        db: {
            uri: 'mongodb://localhost:27017/meanPro',
            user: 'user',
            password: 'password'
        }
    }
}


module.exports = _.extend(config, environment[config.env]);
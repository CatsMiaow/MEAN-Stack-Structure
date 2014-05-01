'use strict';

var index = require('../controllers/index');

module.exports = function(router) {

	router.get('/', index.render);

	// AngularJS $routeProvider templateUrl
	router.get('/views/:folder?/:name', index.views);

	// 서버 상태 체크
	router.get('/health', function(req, res) {
	    res.status(200).send(new Buffer(JSON.stringify({
	        pid: process.pid,
	        memory: process.memoryUsage(),
	        uptime: process.uptime()
	    })));
	});

	// API Routing
	// router.get ('/api/todos', todo.list);
	// router.post('/api/todos/new', todo.new);
	// router.get ('/api/todos/archive', todo.archiveList);
	// router.post('/api/todos/archive', todo.moveToArchive);
	// router.del ('/api/todos/archive', todo.clearArchive);
	// router.get ('/api/todos/:id', todo.show);
	// router.put ('/api/todos/:id', todo.edit);
	// router.del ('/api/todos/:id', todo.delete);
};

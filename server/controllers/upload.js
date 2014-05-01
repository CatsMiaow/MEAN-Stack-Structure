'use strict';

var fs         = require('fs')
  , multiparty = require('multiparty')
  , crypto     = require('crypto')
  , path       = require('path');

exports.image = function(req, res) {
	var form = new multiparty.Form({
		uploadDir: __dirname + '../../../public/data/temp/',
		maxFilesSize: 1024000
	});

	form.parse(req, function(err, fields, files) {
		// console.log(fields);
		// console.log(files);

		if (err) {
			res.json({ error: String(err) });
		}
		else {
			var file = files.image[0]
			  , acceptFileTypes = /^image\/(gif|jpe?g|png)$/i;

			if (!acceptFileTypes.test(file.headers['content-type'])) {
				res.json({ error: 'Not Image File' });
			}

			var filePath  = file.path
			  , fieldName = file.fieldName
			  , dirName   = path.dirname(filePath)
			  , extName   = path.extname(filePath)
			  , fileName  = path.basename(filePath, extName);

			var randomString = fieldName + fileName + Date.now() + Math.random()
			  , newFileName  = crypto.createHash('md5').update(randomString).digest('hex')
			  , newFilePath  = path.join(dirName, newFileName + extName);

			fs.rename(filePath, newFilePath, function(error) {
				// 파일권한변경: root → user 고유 번호
				fs.chown(newFilePath, 515, 515);

				res.json({
					file: path.basename(newFilePath)
				});
			});
		}
	});
};

exports.file = function(req, res) {
	
};
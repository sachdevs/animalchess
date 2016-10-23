var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(__dirname);
	res.sendFile(path.resolve(__dirname + '/../public/main.html'));
});

module.exports = router;

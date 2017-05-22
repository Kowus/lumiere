var express = require('express');
var router = express.Router();
var hbs = require('hbs');

hbs.registerHelper('thisyear', function () {
	return new Date().getFullYear();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lumi&egrave;re' });
});

module.exports = router;

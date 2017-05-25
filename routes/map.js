const express = require('express');
const router = express.Router();
let storedata = require('../stores.json');

/* GET home page. */
router.get('/', function(req, res, next) {
	res.send(storedata);
});

module.exports = router;

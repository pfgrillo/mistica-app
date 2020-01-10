const express = require('express');
const uid = require('uid-safe');

var router = express.Router();

router.get('/comandas', function(req, res, next)
{
	var strUid = uid.sync(18);

	res.json({guid: strUid});
});

module.exports = router;
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/mainform', function(req, res, next) {
    render('mainform');
});

module.exports = router;
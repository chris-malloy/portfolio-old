var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: "Chris Malloy's Portfolio" });
});
/* GET temporary */
router.get('/temporary', function(req, res, next) {
    res.render('temporary', { title: "Chris Malloy's Portfolio" })
});

module.exports = router;
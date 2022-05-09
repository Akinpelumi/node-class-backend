var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    name: 'Michael',
    message: 'respond with a resource',
    state: 'Alabama',
    country: 'Jamaica',
    image: 'man'
  })
});

module.exports = router;

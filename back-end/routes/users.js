var express = require('express');
const { isAuth } = require('../controllers/authen/checkToken');

var router = express.Router();

/* GET users listing. */
router.get('/dxt',isAuth, function(req, res, next) {
  console.log(req.jwtdecode)
});

module.exports = router;

var express = require('express'); //express에 있는 라우터를 생성하기 위해
var router = express.Router();
var user = require('./user');

router.use('/user', user); //다른 라우터 사용시 use 사용

module.exports = router;
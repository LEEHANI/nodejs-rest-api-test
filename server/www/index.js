var express = require('express'); //express에 있는 라우터를 생성하기 위해
var router = express.Router();
var wwwCtrl = require('./www.controller');

router.get('/', wwwCtrl.home);

module.exports = router; //server의 
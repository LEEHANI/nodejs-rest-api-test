var express = require('express'); //express에 있는 라우터를 생성하기 위해
var path = require('path');
var fs = require('fs');

var router = express.Router();

router.get('/getUser/:username', function (req, res) {
  fs.readFile(path.join(__dirname, '../../../data/user.json'), 'utf8', function (err, data) {
            var users = JSON.parse(data);
            res.json(users[req.params.username])
  });
});

module.exports = router; 
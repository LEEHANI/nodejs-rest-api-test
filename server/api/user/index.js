var express = require('express'); //express에 있는 라우터를 생성하기 위해
var path = require('path');
var fs = require('fs');
var router = express.Router();

var userCtrl = require('./user.controller');

router.get('/list', userCtrl.getAll);
router.get('/addUser/:username', userCtrl.getUser);
router.post('/addUser/:username', userCtrl.createUser);
router.put('/updateUser/:username', userCtrl.update);
router.delete('/deleteUser/:username', userCtrl.delete);


router.post('/users/:username', userCtrl.create);
router.get('/users', userCtrl.findAll);
router.get('/userfind/:user_id', userCtrl.listFindOne);
router.put('/userupdate/:user_id', userCtrl.userUpdate);
router.delete('/users/:user_id', userCtrl.userDelete);

module.exports = router; 
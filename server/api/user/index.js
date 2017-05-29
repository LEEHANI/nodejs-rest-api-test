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

router.post('/addUser/:username', function(req, res){

        var result = {  };
        var username = req.params.username;

        // CHECK REQ VALIDITY
        if(!req.body["password"] || !req.body["name"]){
            result["success"] = 0;
            result["error"] = "invalid request";
            res.json(result);
            return;
        }

        // LOAD DATA & CHECK DUPLICATION
        fs.readFile( __dirname + "../../../data/user.json", 'utf8',  function(err, data){
            var users = JSON.parse(data);
            if(users[username]){
                // DUPLICATION FOUND
                result["success"] = 0;
                result["error"] = "duplicate";
                res.json(result);
                return;
            }

            // ADD TO DATA
            users[username] = req.body;

            // SAVE DATA
            fs.writeFile(__dirname + "../../../data/user.json",
                         JSON.stringify(users, null, '\t'), "utf8", function(err, data){
                result = {"success": 1};
                res.json(result);
            })
        })
    });

      router.delete('/deleteUser/:username', function(req, res){
         var result = { };
         //LOAD DATA
         fs.readFile( path.join(__dirname, '../../../data/user.json'), "utf8", function(err, data){
             var users = JSON.parse(data);
 
             // IF NOT FOUND
             if(!users[req.params.username]){
                 result["success"] = 0;
                 result["error"] = "not found";
                 res.json(result);
                 return;
             }
 
             delete users[req.params.username];
             fs.writeFile( path.join(__dirname, '../../../data/user.json'),
                          JSON.stringify(users, null, '\t'), "utf8", function(err, data){
                 result["success"] = 1;
                 res.json(result);
                 return;
             })
         })
 
     })

module.exports = router; 
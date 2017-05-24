var express = require('express');
var ejs = require('ejs');
var app = express();
var path = require('path');

// disable view-caching
app.disable('view cache'); //app은 express 인스턴스

// config template engine
app.set('views', path.join(__dirname, '../client/templates'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);

// serve static files
app.use(express.static('public'));

// routes
app.use('/api', require('./api'));
app.use('/', require('./www')); //여기 안에있는 index 찾아, export한 것을 받아서 사용

app.listen(3000, function () {
  console.log('Rest API Server listening on port 3000!');
});
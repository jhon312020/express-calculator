var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('appTitle', 'Basic Calculator');
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.all('*', function(req, res) {
    res.render(
	'index',
	{title: 'Basic Calculator'}
    );
});
http.createServer(app)
    .listen(
	app.get('port'),
	function() {
	    console.log(
		'Express.js server listening on port ' + app.get('port')
	    );
	}
);




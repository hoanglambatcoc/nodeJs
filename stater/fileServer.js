var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer( function(req, res) {

var q= url.parse(req.url, true);

var fileName = '.' + q.path + '.html';
console.log('fileName ' + fileName);
fs.readFile(fileName, function(err, data) {
	if(err) {
		console.log(err);
		res.writeHeader(404,{'ContentType':'text/html'});
		res.end();
	} else {
	res.writeHeader(200,{'ContentType':'text/html'});
	res.write(data);
	res.end();
	}
});
}).listen(8080);

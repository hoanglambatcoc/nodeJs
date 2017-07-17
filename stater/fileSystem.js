var http = require('http')
var fs = require('fs')
	http.createServer(function(req, res) {
	fs.readFile('wellcome.html', function (err, data) {
	res.writeHeader(200,{'ContentType':'text/html'});
	res.write(data);
	res.end();
	});
}).listen(8080)

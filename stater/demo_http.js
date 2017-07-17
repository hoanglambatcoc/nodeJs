var http = require('http')

http.createServer( function(req,res) {
	res.writeHeader(200, {'ContentType':'application/json'});
	res.write('Resquest url: ' + req.url);
	res.end();
}).listen(8080)

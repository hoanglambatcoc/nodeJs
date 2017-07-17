var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
	service : 'gmail',
	auth : {
		user : 'lehoanglam05@gmail.com',
		pass : '@Soi1992'
	}

});


var mailOptions = {
	form : 'lehoanglam05@gmail.com',
	to: '10520474@aep.uit.edu.vn',
	subject  : 'Sending Email using Node.js',
	text : 'That was easy!'

};

transporter.sendMail( mailOptions, function(err, info) {
	if(err) {
	 	console.log(error);
	} else {
		console.log('Email sent: ' + info.response);
	}

});

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'outlook',
    auth: {
        user: 'yosra.bendoghmen@outlook.com',
        pass: '95500568'
    }
    });

var mailOptions = {
    from: 'yosra.bendoghmen@outlook.com',
    to: 'mohamed.jlassi.355@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });

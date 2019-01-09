var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact');
});
router.post('/contact', function(req, res, next) {
  //console.log("complete");
  
  const nodemailer = require('nodemailer');


nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: "meetsuthar08@gmail.com", // generated ethereal user
            pass: "7874835839"// generated ethereal password
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"fred foo" <foo@example.com>', // sender address
        to:req.body.txt3, // list of receivers
        subject: req.body.txt1, // Subject line
        text: req.body.txt2, // plain text body
//html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
});
  //console.log(req.body.txt1 + req.body.txt2 + req.body.txt3);
res.render('home', { msg:"message send" });
});


module.exports = router;

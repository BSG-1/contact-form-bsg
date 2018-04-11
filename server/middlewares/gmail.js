/**
 *
 * Example custom middlewre
 *
 */
const nodemailer = require('nodemailer');
import env from '../config/env';

export default function(req, res, next) {
  next();
}

export const sendMailFromGmail = (req, res, next) => {
  const buff = new Buffer(env.encrypted_password, 'base64');
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mcarlsonpmw@gmail.com',
      pass: buff.toString('ascii')
    }
  });

  const mailOptions = {
    from: 'mcarlsonpmw@gmail.com',
    replyTo: req.body.email,
    to: 'sfuiguy@gmail.com',
    subject: `Web Contact: ${req.body.subject}`,
    text: req.body.body
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
      res.status(503).json({
        message: 'send failed'
      });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({
        message: 'mail sent'
      });
    }
  });
}